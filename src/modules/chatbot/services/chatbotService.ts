import { NlpManager, NlpResult } from "node-nlp"

import { EntityProvider } from "../providers/FileEntityProvider"
import { intentHandlers } from "../handlers/intentHandlers"
import { Intent, isStaticIntent } from "../types/intents"

import type { ChatResponse } from "../types/intents"
import type { IntentProvider } from "../providers/IntentProvider"

export class ChatbotService {
    private manager: NlpManager
    private isTrained = false

    private readonly confidenceThreshold = 0.6
    private readonly locale = "en"

    private intents = new Map<string, Intent>()

    private constructor(
        private intentProvider: IntentProvider,
        private entityProvider: EntityProvider,
    ) {
        this.manager = new NlpManager({
            languages: [this.locale],
            forceNER: true,
        })
    }

    static async create(
        provider: IntentProvider,
        entityProvider: EntityProvider,
    ): Promise<ChatbotService> {
        const service = new ChatbotService(provider, entityProvider)

        await service.train()

        return service
    }

    private async train() {
        if (this.isTrained) return

        const intents = await this.intentProvider.getIntents()
        const entities = await this.entityProvider.getEntities()

        for (const entity of entities) {
            this.manager.addNamedEntityText(
                entity.entity,
                entity.option,
                [this.locale],
                entity.synonyms,
            )
        }

        for (const intent of intents) {
            this.intents.set(intent.intent, intent)

            for (const example of intent.examples) {
                this.manager.addDocument(this.locale, example, intent.intent)
            }

            if (isStaticIntent(intent)) {
                for (const response of intent.responses) {
                    this.manager.addAnswer(this.locale, intent.intent, response)
                }
            }
        }

        await this.manager.train()
        await this.manager.save()

        this.isTrained = true
    }

    async processMessage(message: string): Promise<ChatResponse> {
        if (!this.isTrained) {
            throw new Error("ChatbotService not trained")
        }

        const result = await this.manager.process(
            this.locale,
            message.toLowerCase().trim(),
        )

        if (
            result.score < this.confidenceThreshold ||
            result.intent === "None"
        ) {
            return this.getFallbackResponse(result.score)
        }

        const intent = this.intents.get(result.intent)

        if (!intent) {
            return this.getFallbackResponse(result.score)
        }

        return {
            intent: intent.intent,
            answer: this.resolveAnswer(intent, result),
            score: result.score,
        }
    }

    private resolveAnswer(intent: Intent, result: NlpResult): string {
        if (isStaticIntent(intent)) {
            return result.answer ?? "Sorry, I don't have a response."
        }

        return this.resolveDynamicAnswer(intent.intent, result)
    }

    private resolveDynamicAnswer(
        intentName: string,
        result: NlpResult,
    ): string {
        const handler = intentHandlers[intentName]

        if (!handler) {
            return "I'm sorry, I don't have a response for that."
        }

        return handler(result)
    }

    private getFallbackResponse(score: number): ChatResponse {
        return {
            intent: "unknown",
            answer: "Sorry, I didn't understand that.",
            score,
        }
    }
}
