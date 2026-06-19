import { Intent } from "../types/intents.js"

export const greetingIntents: Intent[] = [
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
]
