import { generateExamples } from "../../../utils/generateExamples.js"
import { menuConfig } from "../../menu/config/menuConfig.js"
import { Intent } from "../types/intents.js"

const menuNames = (menuConfig?.flatMap((item) => item.synonyms) ??
    []) as string[]

const askMenuItemExamples = generateExamples(menuNames, [
    "tell me about {value}",
    "what is {value}",
    "describe {value}",
    "what comes with {value}",
    "give me information about {value}",
    "show details of {value}",
])

const askPriceExamples = generateExamples(menuNames, [
    "how much is {value}",
    "price of {value}",
    "how much does {value} cost",
    "what is the price of {value}",
    "cost of {value}",
])

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
        examples: askMenuItemExamples,
    },
    {
        intent: "ask_price",
        type: "dynamic",
        examples: askPriceExamples,
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
