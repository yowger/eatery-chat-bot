declare module "node-nlp" {
    export type Classification = {
        intent: string
        score: number
    }

    export type NlpResponse = {
        locale: string
        utterance: string
        intent: string
        score: number
        classifications: Classification[]
        answer?: string
        answers?: string[]
        entities: any[]
        sourceEntities: any[]
        sentiment: {
            score: number
            vote: string
        }
    }

    export class NlpManager {
        constructor(settings: {
            languages: string[]
            forceNER?: boolean
            [key: string]: any
        })
        save(): Promise<void>
        addDocument(locale: string, text: string, intent: string): void
        addAnswer(locale: string, intent: string, answer: string): void
        train(): Promise<void>
        process(locale: string, text: string): Promise<NlpResponse>
    }
}
