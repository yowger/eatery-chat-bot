import { NlpManager } from "node-nlp"

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

    private constructor(private provider: IntentProvider) {
        this.manager = new NlpManager({
            languages: [this.locale],
        })
    }

    static async create(provider: IntentProvider): Promise<ChatbotService> {
        const service = new ChatbotService(provider)

        await service.train()

        return service
    }

    private async train() {
        if (this.isTrained) return

        const intents = await this.provider.getIntents()

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

        const normalizedMessage = message.toLowerCase().trim()

        const result = await this.manager.process(
            this.locale,
            normalizedMessage,
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
            answer: this.resolveAnswer(
                intent,
                normalizedMessage,
                result.answer,
            ),
            score: result.score,
        }
    }

    private resolveAnswer(
        intent: Intent,
        message: string,
        nlpAnswer?: string,
    ): string {
        if (isStaticIntent(intent)) {
            return nlpAnswer ?? "Sorry, I don't have a response for that."
        }

        return this.resolveDynamicAnswer(intent.intent, message)
    }

    private resolveDynamicAnswer(intentName: string, message: string): string {
        const handler = intentHandlers[intentName]

        if (!handler) {
            throw new Error(`No handler registered for intent "${intentName}"`)
        }

        return handler(message)
    }

    private getFallbackResponse(score: number): ChatResponse {
        return {
            intent: "unknown",
            answer: "Sorry, I didn't understand that.",
            score,
        }
    }
}
