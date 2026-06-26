import { businessHandlers } from "../../business/handlers/businessHandlers"
import { menuHandlers } from "../../menu/handlers/menuHandlers"

import type { IntentHandlerMap } from "../types/intents"

export const intentHandlers: IntentHandlerMap = {
    ...businessHandlers,
    ...menuHandlers,
}
