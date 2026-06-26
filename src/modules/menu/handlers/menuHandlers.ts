import { MenuService } from "../services/MenuService"

import type { Category, MenuSizeLabel } from "../types/menu"
import type { IntentHandlerMap } from "../../chatbot/types/intents"
import { getEntity } from "../../chatbot/utils/entity"

const menuService = new MenuService()

export const menuHandlers: IntentHandlerMap = {
    ask_menu: () => {
        const items = menuService.getAvailable()

        if (items.length === 0) {
            return "Our menu is currently unavailable."
        }

        return items.map((item) => `• ${item.name} - ₱${item.price}`).join("\n")
    },

    ask_menu_item: (result) => {
        const name = getEntity(result, "item")

        if (!name) {
            return "Which menu item are you looking for?"
        }

        const item = menuService.getByName(name)

        if (!item) {
            return `Sorry, I couldn't find "${name}" on our menu.`
        }

        return [
            item.name,
            `Price: ₱${item.price}`,
            `Category: ${item.category}`,
            item.description && `Description: ${item.description}`,
        ]
            .filter(Boolean)
            .join("\n")
    },

    ask_menu_category: (result) => {
        const category = getEntity(result, "category") as Category | undefined

        if (!category) {
            return "Which category? (food, drink, dessert)"
        }

        const items = menuService.getByCategory(category)

        if (items.length === 0) {
            return `Sorry, we don't have any ${category} items.`
        }

        return items.map((item) => `• ${item.name} - ₱${item.price}`).join("\n")
    },

    ask_price: (result) => {
        const itemName = getEntity(result, "item")
        const size = getEntity(result, "size") as MenuSizeLabel | undefined

        if (!itemName) {
            return "Which item's price would you like to know?"
        }

        const price = menuService.getPrice(itemName, size)

        if (price === undefined) {
            return `Sorry, I couldn't find "${itemName}" on our menu.`
        }

        return `${size ? `${size} ` : ""}${itemName} costs ₱${price}.`
    },

    ask_allergen: (result) => {
        const allergen = getEntity(result, "allergen")

        if (!allergen) {
            return "Which allergen are you asking about?"
        }

        const items = menuService.getByAllergen(allergen)

        if (items.length === 0) {
            return `We don't have any menu items containing ${allergen}.`
        }

        return `Items containing ${allergen}:\n${items
            .map((item) => `• ${item.name}`)
            .join("\n")}`
    },

    ask_tag: (result) => {
        const tag = getEntity(result, "tag")

        if (!tag) {
            return "Which tag are you looking for?"
        }

        const items = menuService.getByTag(tag)

        if (items.length === 0) {
            return `No ${tag} menu items were found.`
        }

        return `${tag} menu items:\n${items
            .map((item) => `• ${item.name} - ₱${item.price}`)
            .join("\n")}`
    },
}
