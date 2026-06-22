export type BaseIntent = {
    intent: string
    examples: string[]
}

export type StaticIntent = BaseIntent & {
    type: "static"
    responses: string[]
}

export type DynamicIntent = BaseIntent & {
    type: "dynamic"
}

export type Intent = StaticIntent | DynamicIntent

export type ChatResponse = {
    intent: string
    answer?: string
    score: number
}

export const isStaticIntent = (intent: Intent): intent is StaticIntent => {
    return intent.type === "static"
}

export const isDynamicIntent = (intent: Intent): intent is DynamicIntent => {
    return intent.type === "dynamic"
}

export const isIntent = (intent: Intent): intent is Intent => {
    return isStaticIntent(intent) || isDynamicIntent(intent)
}

export type IntentHandler = (message: string) => string
