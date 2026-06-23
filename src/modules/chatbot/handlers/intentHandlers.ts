import { BusinessService } from "../services/BusinessService"
import { IntentHandler } from "../types/intents"

export const businessService = new BusinessService()

export const intentHandlers: Record<string, IntentHandler> = {
    ask_open_now: () => businessService.isOpenNow(),

    get_today_hours: () => businessService.getTodayHours(),

    ask_address: () => businessService.getAddress(),

    ask_phone: () => businessService.getPhone(),
}
