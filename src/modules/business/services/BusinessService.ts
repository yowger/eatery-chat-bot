import { businessConfig } from "../config/BusinessConfig"
import { isOpenNow } from "../utils/businessUtil"

export class BusinessService {
    getName(): string {
        return businessConfig.name
    }

    getAddress(): string {
        return businessConfig.address
    }

    getPhone(): string {
        return businessConfig.phone
    }

    getHours() {
        return businessConfig.hours
    }

    getStatus() {
        return isOpenNow(businessConfig.hours)
    }

    isOpen(): boolean {
        return this.getStatus().open
    }

    getTodayHours(): string | undefined {
        return this.getStatus().todayHours
    }
}
