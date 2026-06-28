import { FileEntityProvider } from "./modules/chatbot/providers/FileEntityProvider"
import { FileIntentProvider } from "./modules/chatbot/providers/FileIntentProvider"
import { ChatbotService } from "./modules/chatbot/services/chatbotService"

async function main() {
    const intentProvider = new FileIntentProvider()
    const EntityProvider = new FileEntityProvider()

    const chatbot = await ChatbotService.create(intentProvider, EntityProvider)

    const testMessages = [
        "tell me about hamburger",
        "what is double cheese burger",
        "describe crispy chicken",
        "what comes with french fries",
        "give me information about choco cake",

        // "hello",
        // "hi there",
        // "what is your name?",
        // "how are you?",
        // "help me",
        // "bye",
        // "see you later",
        // "good morning",
        // "Are you open today?",
        // "Are you open now?",
        // "What are your hours today?",
        // "Show me your menu",
        // "What do you sell?",
        // "Can I see the menu?",

        // "Show me your food",
        // "What drinks do you have?",
        // "Do you have desserts?",
        // "List your beverages",

        // "Tell me about the Burger",
        // "Do you have fries?",
        // "What is Cheeseburger?",
        // "Tell me about Hot Coffee",

        // "How much is Burger?",
        // "How much is a large Burger?",
        // "How much is a small Fries?",
        // "Price of Coke",
        // "How much does Ice Cream cost?",

        // "Show halal food",
        // "What vegan items do you have?",
        // "What are your bestseller items?",
        // "Do you have spicy food?",

        // "Which foods contain gluten?",
        // "Do you have dairy-free food?",
        // "Show items with eggs",
        // "What contains dairy?",

        // "How much is a large Coke?",
        // "Tell me about large Burger",
        // "Show vegan drinks",
        // "Show halal desserts",

        // "How much is Pizza?",
        // "Tell me about Sushi",
        // "Show seafood",
        // "Do you have pork?",

        // "Burger price",
        // "Coffee",
        // "Cake",
        // "Large fries",
        // "Small coke",
    ]

    for (const msg of testMessages) {
        const result = await chatbot.processMessage(msg)
        console.log(`User: ${msg}`)
        console.log(`Bot:`, result)
        console.log("-------------")
    }
}

main()
