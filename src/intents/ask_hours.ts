import { Intent } from "../types/intents.js"

export const greetingIntents: Intent[] = [
    {
        intent: "ask_hours",
        examples: [
            "what are your hours",
            "when are you open",
            "opening time",
            "closing time",
        ],
        responses: ["We are open from 8AM to 5PM."],
    },
]
