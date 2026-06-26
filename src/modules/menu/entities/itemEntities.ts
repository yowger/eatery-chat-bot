import { menuConfig } from "../config/menuConfig"

import { Entity } from "../../../types/entity"

export const itemEntities: Entity[] = menuConfig.map((item) => ({
    entity: "item",
    option: item.name,
    synonyms: [
        ...new Set([
            item.name.toLowerCase(),
            item.id.replace(/_/g, " "),
            ...(item.synonyms ?? []),
        ]),
    ],
}))
