import { Intent } from "../types/intents"

export interface IntentProvider {
    getIntents(): Promise<Intent[]>
}
