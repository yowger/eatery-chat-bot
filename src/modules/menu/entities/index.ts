import { Entity } from "../../../types/entity"
import { allergenEntities } from "./allergenEntities"
import { categoryEntities } from "./categoryEntities"
import { itemEntities } from "./itemEntities"
import { sizeEntities } from "./sizeEntities"
import { tagEntities } from "./tagEntities"

export const menuEntities: Entity[] = [
    ...itemEntities,
    ...sizeEntities,
    ...categoryEntities,
    ...allergenEntities,
    ...tagEntities,
]
