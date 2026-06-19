import { NlpManager } from "node-nlp"

type Intent = {
    intent: string
    examples: string[]
    responses: string[]
}

const intents: Intent[] = [
    {
        intent: "greeting",
        examples: [
            "hello",
            "hi",
            "hey",
            "hello there",
            "hi there",
            "hey there",
            "good morning",
            "good afternoon",
            "good evening",
            "howdy",
            "yo",
            "what's up",
            "whats up",
            "sup",
            "greetings",
            "nice to meet you",
            "good day",
            "hello chatbot",
            "hi chatbot",
            "hey chatbot",
        ],
        responses: [
            "Hello! How can I assist you today?",
            "Hi! How can I help you today?",
            "Hey! What can I do for you today?",
            "Hello there! How may I help you?",
        ],
    },
    {
        intent: "goodbye",
        examples: [
            "bye",
            "goodbye",
            "see you",
            "see you later",
            "talk to you later",
            "catch you later",
            "have a nice day",
            "have a good day",
            "take care",
            "farewell",
            "i have to go",
            "gotta go",
            "thanks bye",
            "thank you bye",
            "bye bye",
            "later",
            "peace out",
        ],
        responses: [
            "Goodbye! Have a great day.",
            "Take care! Feel free to come back anytime.",
            "See you later! Have a wonderful day.",
            "Thanks for chatting. Goodbye!",
        ],
    },
]

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
    console.log("🚀 ~ main ~ response:", response)

    if (response.score < 0.6) {
        console.log({
            intent: "unknown",
            answer: "Sorry, I didn't understand that.",
        })
        return
    }

    // console.log({
    //     intent: response.intent,
    //     answer: response.answers,
    //     score: response.score,
    // })
}

main()
