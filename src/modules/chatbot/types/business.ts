export type DayHours = {
    open: string
    close: string
    closed?: boolean
}

export type BusinessHours = {
    monday: DayHours
    tuesday: DayHours
    wednesday: DayHours
    thursday: DayHours
    friday: DayHours
    saturday: DayHours
    sunday: DayHours
}
