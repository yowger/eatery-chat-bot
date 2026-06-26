export type MenuSizeLabel = "small" | "medium" | "large"

export type Category = "food" | "drink" | "dessert"

export type MenuSize = {
    label: MenuSizeLabel
    priceModifier: number
}

export type MenuItem = {
    id: string
    name: string
    description?: string
    price: number

    category: Category

    sizes?: MenuSize[]

    tags?: string[]

    allergens?: string[]

    available: boolean
}
