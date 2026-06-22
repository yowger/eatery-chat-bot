import { FileIntentProvider } from "./modules/chatbot/providers/FileIntentProvider"
import { ChatbotService } from "./modules/chatbot/services/chatbotService"

async function main() {
    const provider = new FileIntentProvider()

    const chatbot = await ChatbotService.create(provider)

    const testMessages = [
        "hello",
        "hi there",
        "what is your name?",
        "how are you?",
        "help me",
        "bye",
        "see you later",
        "good morning",
        "Are you open today?",
        "Are you open now?",
        "What are your hours today?",
    ]

    for (const msg of testMessages) {
        const result = await chatbot.processMessage(msg)
        console.log(`User: ${msg}`)
        console.log(`Bot:`, result)
        console.log("-------------")
    }
}

main()
