import { Entity } from "../../../types/entity"
import { loadEntities } from "../loaders/entityLoader"

export interface EntityProvider {
    getEntities(): Promise<Entity[]>
}

export class FileEntityProvider implements EntityProvider {
    async getEntities(): Promise<Entity[]> {
        return loadEntities()
    }
}
