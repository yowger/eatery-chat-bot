export type EntityType = "item" | "category" | "size" | "tag" | "allergen"

export type Entity = {
    entity: EntityType
    option: string
    synonyms: string[]
}
