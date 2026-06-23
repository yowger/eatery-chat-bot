import { businessService } from "../services"

export const businessHandlers = {
    ask_open_today: () => businessService.isOpenToday(),
    ask_open_now: () => businessService.isOpenNow(),
    get_today_hours: () => businessService.getTodayHours(),
    ask_address: () => businessService.getAddress(),
    ask_phone: () => businessService.getPhone(),
}
