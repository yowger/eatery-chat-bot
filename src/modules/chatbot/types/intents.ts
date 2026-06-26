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

export function isIntent(value: unknown): value is Intent {
    if (!value || typeof value !== "object") {
        return false
    }

    const intent = value as Partial<Intent>

    if (typeof intent.intent !== "string" || !Array.isArray(intent.examples)) {
        return false
    }

    if (intent.type === "static") {
        return Array.isArray(intent.responses)
    }

    if (intent.type === "dynamic") {
        return true
    }

    return false
}

export type IntentHandler<TArgs extends any[] = any[], TResult = any> = (
    ...args: TArgs
) => TResult

export type IntentHandlerMap = Record<string, IntentHandler>
