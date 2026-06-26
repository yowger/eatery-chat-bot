declare module "node-nlp" {
    export type Classification = {
        intent: string
        score: number
    }

    export type NlpEntity = {
        entity: string
        option: string
        sourceText: string
        utteranceText: string
        accuracy: number
        start: number
        end: number
    }

    export type SentimentResult = {
        score: number
        vote: string
    }

    export type NlpResult = {
        locale: string
        utterance: string
        intent: string
        score: number

        classifications: Classification[]

        answer?: string
        answers?: string[]

        entities: NlpEntity[]
        sourceEntities: unknown[]

        sentiment: SentimentResult
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

        addNamedEntityText(
            entityName: string,
            optionName: string,
            languages: string[],
            texts: string[],
        ): void

        train(): Promise<void>

        process(locale: string, text: string): Promise<NlpResult>
    }
}
