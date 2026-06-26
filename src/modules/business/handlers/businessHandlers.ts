import { businessService } from "../services"

export const businessHandlers = {
    ask_open_today: () => {
        const status = businessService.getStatus()

        if (!status.open) {
            return "No, we are closed today."
        }

        return `Yes, we are open today until ${status.todayHours}.`
    },

    ask_open_now: () => {
        const status = businessService.getStatus()

        if (!status.open) {
            return "No, we are currently closed."
        }

        return `Yes, we are currently open until ${status.todayHours}.`
    },

    get_today_hours: () => {
        const hours = businessService.getTodayHours()

        return hours ?? "We are closed today."
    },

    ask_address: () => {
        return businessService.getAddress()
    },

    ask_phone: () => {
        return businessService.getPhone()
    },
}
