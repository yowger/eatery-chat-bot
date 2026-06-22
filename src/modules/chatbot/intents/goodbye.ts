import { Intent } from "../types/intents.js"

const intents: Intent[] = [
    {
        intent: "goodbye",
        type: "static",
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

export default intents
