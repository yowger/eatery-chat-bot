import { businessConfig } from "../config/BusinessConfig"
import { IntentHandler } from "../types/intents"
import { isOpenNow } from "../utils/businessUtil"

export const intentHandlers: Record<string, IntentHandler> = {
    ask_open_today: (_message) => {
        const status = isOpenNow(businessConfig.hours)

        if (!status.open) {
            return "No, we are closed today."
        }

        return `Yes, we are open today until ${status.todayHours}.`
    },

    ask_address: (_message) => {
        return businessConfig.address
    },

    ask_phone: (_message) => {
        return businessConfig.phone
    },
}
