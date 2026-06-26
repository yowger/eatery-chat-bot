import fs from "fs"
import path from "path"
import { pathToFileURL } from "url"

import { Intent, isIntent } from "../types/intents"

export async function loadIntents(): Promise<Intent[]> {
    const intents: Intent[] = []

    const folderPath = path.resolve("./src/modules/chatbot/intents")
    const files = fs.readdirSync(folderPath)

    for (const file of files) {
        if (!file.endsWith(".ts") && !file.endsWith(".js")) {
            continue
        }

        const filePath = path.join(folderPath, file)

        const module = await import(pathToFileURL(filePath).href)

        const exported = module.default ?? module.intents

        if (!exported) {
            continue
        }

        const loaded = Array.isArray(exported) ? exported : [exported]

        for (const intent of loaded) {
            if (!isIntent(intent)) {
                throw new Error(`Invalid intent found in "${file}".`)
            }

            intents.push(intent)
        }
    }

    return intents
}
