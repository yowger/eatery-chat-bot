import { Intent } from "../types/intents.js"

const intents: Intent[] = [
    {
        intent: "ask_menu",
        type: "dynamic",
        examples: [
            "show me the menu",
            "show menu",
            "can i see the menu",
            "what do you serve",
            "what food do you have",
            "what do you sell",
            "what's on the menu",
            "list your menu",
            "menu please",
            "display the menu",
        ],
    },

    {
        intent: "ask_menu_item",
        type: "dynamic",
        examples: [
            "tell me about burger",
            "what is burger",
            "what is cheeseburger",
            "describe fried chicken",
            "what comes with fries",
            "give me information about burger",
            "show details of coke",
            "what is ice cream",
            "tell me about chocolate cake",
        ],
    },

    {
        intent: "ask_price",
        type: "dynamic",
        examples: [
            "how much is burger",
            "price of burger",
            "how much does burger cost",
            "what is the price of burger",
            "how much is a large burger",
            "how much is a small fries",
            "price of large coke",
            "how much is medium cheeseburger",
            "what does hot coffee cost",
        ],
    },

    {
        intent: "ask_menu_category",
        type: "dynamic",
        examples: [
            "show me drinks",
            "show desserts",
            "show food",
            "what drinks do you have",
            "what desserts do you sell",
            "list food",
            "show food menu",
            "show drink menu",
            "show dessert menu",
        ],
    },

    {
        intent: "ask_tag",
        type: "dynamic",
        examples: [
            "show halal food",
            "show vegan food",
            "show vegetarian food",
            "what are your bestsellers",
            "what are your bestseller items",
            "show spicy food",
            "what vegan items do you have",
            "list halal menu",
        ],
    },

    {
        intent: "ask_allergen",
        type: "dynamic",
        examples: [
            "which foods contain gluten",
            "what has dairy",
            "which menu items have eggs",
            "show gluten items",
            "foods with dairy",
            "foods with eggs",
            "which items contain milk",
            "what menu has gluten",
        ],
    },
]

export default intents
