import { businessHandlers } from "../../business/handlers/businessHandlers"

import { IntentHandler } from "../types/intents"

export const intentHandlers: Record<string, IntentHandler> = {
    ...businessHandlers,
}
