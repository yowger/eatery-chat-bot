import { NlpManager } from "node-nlp"

import { type Intent } from "../types/intents"

export class ChatbotService {
    private manager: NlpManager
    private isTrained = false

    constructor(private intents: Intent[]) {
        this.manager = new NlpManager({
            languages: ["en"],
        })
    }

    async train() {
        if (this.isTrained) return

        for (const intent of this.intents) {
            for (const example of intent.examples) {
                this.manager.addDocument("en", example, intent.intent)
            }

            for (const response of intent.responses) {
                this.manager.addAnswer("en", intent.intent, response)
            }
        }

        await this.manager.train()
        this.manager.save()

        this.isTrained = true
    }

    async processMessage(message: string) {
        if (!this.isTrained) {
            throw new Error("ChatbotService not trained")
        }

        const response = await this.manager.process(
            "en",
            message.toLowerCase().trim(),
        )

        if (response.score < 0.6 || response.intent === "None") {
            return {
                intent: "unknown",
                answer: "Sorry, I didn't understand that.",
                score: response.score,
            }
        }

        return {
            intent: response.intent,
            answer: response.answer,
            score: response.score,
        }
    }
}
