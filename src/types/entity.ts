export type EntityType = "item" | "category" | "size" | "tag" | "allergen"

export type Entity = {
    entity: EntityType
    option: string
    synonyms: string[]
}

export const isEntity = (value: unknown): value is Entity => {
    if (!value || typeof value !== "object") {
        return false
    }

    const entity = value as Entity

    return (
        typeof entity.entity === "string" &&
        typeof entity.option === "string" &&
        Array.isArray(entity.synonyms) &&
        entity.synonyms.every((s) => typeof s === "string")
    )
}
