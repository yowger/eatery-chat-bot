import { businessConfig } from "../config/BusinessConfig"
import { IBusinessService } from "../interfaces/IBusinessService"

export class BusinessService implements IBusinessService {
    getHours(): string {
        const hours = businessConfig.hours

        return Object.entries(hours)
            .map(([day, value]) => {
                const label = day.charAt(0).toUpperCase() + day.slice(1)

                if (value.closed) {
                    return `${label}: Closed`
                }

                return `${label}: ${value.open} - ${value.close}`
            })
            .join("\n")
    }

    getAddress(): string {
        return businessConfig.address
    }

    getPhone(): string {
        return businessConfig.phone
    }

    getName(): string {
        return businessConfig.name
    }
}
