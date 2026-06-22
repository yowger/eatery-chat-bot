import { businessConfig } from "../config/BusinessConfig"
import { isOpenNow } from "../utils/businessUtil"

export const intentHandlers: Record<string, () => string> = {
    ask_open_today: () => {
        const status = isOpenNow(businessConfig.hours)

        if (!status.open) {
            return "No, we are closed today."
        }

        return `Yes, we are open today until ${status.todayHours}.`
    },
    ask_address: () => businessConfig.address,
    ask_phone: () => businessConfig.phone,
}
