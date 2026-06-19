import fs from "fs"
import path from "path"
import { pathToFileURL } from "url"

import { type Intent } from "../types/intents"

export async function loadIntents(): Promise<Intent[]> {
    const intents: Intent[] = []

    const folderPath = path.resolve("./src/intents")
    const files = fs.readdirSync(folderPath)

    for (const file of files) {
        if (!file.endsWith(".ts") && !file.endsWith(".js")) continue

        const filePath = path.join(folderPath, file)

        const module = await import(pathToFileURL(filePath).href)

        const exported = module.default || module.intents

        if (Array.isArray(exported)) {
            intents.push(...exported)
        } else {
            intents.push(exported)
        }
    }

    return intents
}
