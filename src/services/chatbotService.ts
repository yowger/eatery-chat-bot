import { NlpManager } from "node-nlp"

import { type IntentProvider } from "../providers/IntentProvider"
import { type ChatResponse } from "../types/intents"

export class ChatbotService {
    private manager: NlpManager
    private isTrained = false
    private readonly confidenceThreshold = 0.6
    private readonly locale = "en"

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
            for (const example of intent.examples) {
                this.manager.addDocument(this.locale, example, intent.intent)
            }

            for (const response of intent.responses) {
                this.manager.addAnswer(this.locale, intent.intent, response)
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

        const response = await this.manager.process(
            this.locale,
            message.toLowerCase().trim(),
        )

        if (
            response.score < this.confidenceThreshold ||
            response.intent === "None"
        ) {
            return this.getFallbackResponse(response.score)
        }

        return {
            intent: response.intent,
            answer:
                response.answer ?? "Sorry, I don't have a response for that.",
            score: response.score,
        }
    }

    private getFallbackResponse(score: number): ChatResponse {
        return {
            intent: "unknown",
            answer: "Sorry, I didn't understand that.",
            score,
        }
    }
}
