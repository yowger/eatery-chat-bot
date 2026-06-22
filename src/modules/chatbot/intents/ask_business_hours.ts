import { Intent } from "../types/intents.js"

const intents: Intent[] = [
    {
        intent: "ask_open_today",
        type: "dynamic",
        examples: [
            "are you open on sunday",
            "is the store open today",
            "do you open today",
            "closing time",
        ],
    },
    {
        intent: "ask_open_now",
        type: "dynamic",
        examples: [
            "are you open now",
            "is the store open now",
            "do you open now",
            "can I come now",
        ],
    },
    {
        intent: "get_today_hours",
        type: "dynamic",
        examples: [
            "what are your hours today",
            "business hours today",
            "when do you open today",
        ],
    },
]

export default intents
