import { BusinessHours } from "../types/business"

export function getTodayKey(): keyof BusinessHours {
    const days = [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
    ] as const

    return days[new Date().getDay()]
}

export function isOpenNow(hours: BusinessHours): {
    open: boolean
    todayHours?: string
} {
    const today = getTodayKey()
    const todayData = hours[today]

    if (todayData.closed) {
        return { open: false }
    }

    return {
        open: true,
        todayHours: `${todayData.open} - ${todayData.close}`,
    }
}
