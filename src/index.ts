import { NlpManager } from "node-nlp"

import { intents } from "./intents/index.js"

const manager = new NlpManager({ languages: ["en"] })

async function main() {
    for (const intent of intents) {
        for (const example of intent.examples) {
            manager.addDocument("en", example, intent.intent)
        }

        for (const response of intent.responses) {
            manager.addAnswer("en", intent.intent, response)
        }
    }

    await manager.process("en", "bye")
    manager.save()

    const response = await manager.process("en", "bye")

    if (response.score < 0.6) {
        console.log({
            intent: "unknown",
            answer: "Sorry, I didn't understand that.",
        })
        return
    }

    console.log("🚀 ~ main ~ response:", response)
}

main()
