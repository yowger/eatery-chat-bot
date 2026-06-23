export type MenuSize = {
    label: "small" | "medium" | "large"
    priceModifier: number
}

export type MenuItem = {
    id: string
    name: string
    description?: string
    price: number

    category: "food" | "drink" | "dessert"

    sizes?: MenuSize[]

    tags?: string[]

    allergens?: string[]

    available: boolean
}

export const menuConfig: MenuItem[] = [
    {
        id: "burger",
        name: "Burger",
        description: "Juicy beef burger with cheese and lettuce",
        price: 120,
        category: "food",
        tags: ["halal", "bestseller"],
        allergens: ["gluten", "dairy"],
        available: true,
        sizes: [
            { label: "small", priceModifier: -20 },
            { label: "large", priceModifier: 40 },
        ],
    },
    {
        id: "cheese_burger",
        name: "Cheeseburger",
        description: "Classic burger with double cheese",
        price: 140,
        category: "food",
        tags: ["halal"],
        allergens: ["gluten", "dairy"],
        available: true,
        sizes: [
            { label: "medium", priceModifier: 0 },
            { label: "large", priceModifier: 30 },
        ],
    },
    {
        id: "fried_chicken",
        name: "Fried Chicken",
        description: "Crispy fried chicken with special seasoning",
        price: 150,
        category: "food",
        tags: ["halal", "spicy", "bestseller"],
        allergens: ["gluten"],
        available: true,
    },
    {
        id: "fries",
        name: "Fries",
        description: "Golden crispy french fries",
        price: 60,
        category: "food",
        tags: ["vegan", "halal"],
        allergens: [],
        available: true,
        sizes: [
            { label: "small", priceModifier: -10 },
            { label: "large", priceModifier: 20 },
        ],
    },
    {
        id: "chicken_nuggets",
        name: "Chicken Nuggets",
        description: "Bite-sized crispy chicken nuggets",
        price: 90,
        category: "food",
        tags: ["halal"],
        allergens: ["gluten"],
        available: true,
    },

    {
        id: "coke",
        name: "Coke",
        description: "Chilled Coca-Cola",
        price: 40,
        category: "drink",
        tags: [],
        allergens: [],
        available: true,
        sizes: [
            { label: "small", priceModifier: 0 },
            { label: "large", priceModifier: 15 },
        ],
    },
    {
        id: "iced_tea",
        name: "Iced Tea",
        description: "Refreshing iced tea with lemon",
        price: 35,
        category: "drink",
        tags: ["vegan"],
        allergens: [],
        available: true,
    },
    {
        id: "hot_coffee",
        name: "Hot Coffee",
        description: "Fresh brewed coffee",
        price: 50,
        category: "drink",
        tags: ["vegan"],
        allergens: [],
        available: true,
        sizes: [
            { label: "small", priceModifier: -10 },
            { label: "large", priceModifier: 20 },
        ],
    },

    {
        id: "ice_cream",
        name: "Ice Cream",
        description: "Creamy vanilla ice cream",
        price: 70,
        category: "dessert",
        tags: ["vegetarian"],
        allergens: ["dairy"],
        available: true,
        sizes: [
            { label: "small", priceModifier: 0 },
            { label: "large", priceModifier: 25 },
        ],
    },
    {
        id: "chocolate_cake",
        name: "Chocolate Cake",
        description: "Rich chocolate layered cake",
        price: 90,
        category: "dessert",
        tags: ["vegetarian"],
        allergens: ["gluten", "dairy", "eggs"],
        available: true,
    },
]
