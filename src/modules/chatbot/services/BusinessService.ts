import { businessConfig } from "../config/BusinessConfig"
import { isOpenNow } from "../utils/businessUtil"

export class BusinessService {
    getAddress(): string {
        return businessConfig.address
    }

    getPhone(): string {
        return businessConfig.phone
    }

    getTodayHours(): string {
        const status = isOpenNow(businessConfig.hours)

        if (!status.todayHours) {
            return "We are closed today."
        }

        return status.todayHours
    }

    isOpenToday(): string {
        const status = isOpenNow(businessConfig.hours)

        if (!status.open) {
            return "No, we are closed today."
        }

        return `Yes, we are open today until ${status.todayHours}.`
    }

    isOpenNow(): string {
        const status = isOpenNow(businessConfig.hours)

        if (!status.open) {
            return "No, we are currently closed."
        }

        return `Yes, we are currently open until ${status.todayHours}.`
    }
}
