import { FileIntentProvider } from "./modules/chatbot/providers/FileIntentProvider"
import { ChatbotService } from "./modules/chatbot/services/chatbotService"

async function main() {
    const provider = new FileIntentProvider()

    const chatbot = await ChatbotService.create(provider)

    const result = await chatbot.processMessage("bye")

    console.log(result)
}

main()
