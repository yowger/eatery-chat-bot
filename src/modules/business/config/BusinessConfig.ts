import { BusinessHours } from "../types/business"

type BusinessConfig = {
    name: string
    hours: BusinessHours
    address: string
    phone: string
}

export const businessConfig: BusinessConfig = {
    name: "Eat and Go",

    hours: {
        monday: { open: "10:00", close: "20:00" },
        tuesday: { open: "10:00", close: "20:00" },
        wednesday: { open: "10:00", close: "20:00" },
        thursday: { open: "10:00", close: "20:00" },
        friday: { open: "10:00", close: "22:00" },
        saturday: { open: "10:00", close: "22:00" },
        sunday: { closed: true, open: "", close: "" },
    },

    address: "123 Main Street",
    phone: "+63 912 345 6789",
}
