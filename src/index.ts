import { loadIntents } from "./loaders/intentLoader.js"
import { ChatbotService } from "./services/chatbotService.js"

async function main() {
    const intents = await loadIntents()
    const chatbot = new ChatbotService(intents)

    await chatbot.train()

    const result = await chatbot.processMessage("bye")

    console.log(result)
}

main()
