export type Intent = {
    intent: string
    examples: string[]
    responses: string[]
}

export type ChatResponse = {
    intent: string
    answer?: string
    score: number
}
