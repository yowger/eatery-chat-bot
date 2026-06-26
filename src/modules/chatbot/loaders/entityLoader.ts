import fs from "fs"
import path from "path"
import { pathToFileURL } from "url"

import { Entity, isEntity } from "../../../types/entity"

export async function loadEntities(): Promise<Entity[]> {
    const entities: Entity[] = []

    const folderPath = path.resolve("./src/modules/chatbot/entities")
    const files = fs.readdirSync(folderPath)

    for (const file of files) {
        if (!file.endsWith(".ts") && !file.endsWith(".js")) {
            continue
        }

        const filePath = path.join(folderPath, file)

        const module = await import(pathToFileURL(filePath).href)

        const exported = module.default ?? module.entities

        if (!exported) {
            continue
        }

        const loaded = Array.isArray(exported) ? exported : [exported]

        for (const entity of loaded) {
            if (!isEntity(entity)) {
                throw new Error(`Invalid entity found in "${file}".`)
            }

            entities.push(entity)
        }
    }

    return entities
}
