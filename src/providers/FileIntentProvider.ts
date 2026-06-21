import { loadIntents } from "../loaders/intentLoader"
import { type Intent } from "../types/intents"
import { type IntentProvider } from "./IntentProvider"

export class FileIntentProvider implements IntentProvider {
    async getIntents(): Promise<Intent[]> {
        return loadIntents()
    }
}
