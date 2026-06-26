import { MenuService } from "../services/MenuService"

import type { Category, MenuSizeLabel } from "../types/menu"
import type { IntentHandlerMap } from "../../chatbot/types/intents"

const menuService = new MenuService()

export const menuHandlers: IntentHandlerMap = {
    ask_menu: () => {
        const items = menuService.getAvailable()

        if (items.length === 0) {
            return "Our menu is currently unavailable."
        }

        return items.map((item) => `• ${item.name} - ₱${item.price}`).join("\n")
    },

    ask_menu_item: (name: string) => {
        const item = menuService.getByName(name)

        if (!item) {
            return `Sorry, I couldn't find "${name}" on our menu.`
        }

        return [
            `${item.name}`,
            `Price: ₱${item.price}`,
            `Category: ${item.category}`,
            item.description && `Description: ${item.description}`,
        ]
            .filter(Boolean)
            .join("\n")
    },

    ask_menu_category: (category: string) => {
        const items = menuService.getByCategory(category as Category)

        if (items.length === 0) {
            return `Sorry, we don't have any ${category} items.`
        }

        return items.map((item) => `• ${item.name} - ₱${item.price}`).join("\n")
    },

    ask_price: (itemName: string, size?: MenuSizeLabel) => {
        const price = menuService.getPrice(itemName, size)

        if (price === undefined) {
            return `Sorry, I couldn't find "${itemName}" on our menu.`
        }

        return `${itemName} costs ₱${price}.`
    },

    ask_allergen: (allergen: string) => {
        const items = menuService.getByAllergen(allergen)

        if (items.length === 0) {
            return `We don't have any menu items containing ${allergen}.`
        }

        return `Items containing ${allergen}:\n${items
            .map((item) => `• ${item.name}`)
            .join("\n")}`
    },

    ask_tag: (tag: string) => {
        const items = menuService.getByTag(tag)

        if (items.length === 0) {
            return `No ${tag} menu items were found.`
        }

        return `${tag} menu items:\n${items
            .map((item) => `• ${item.name} - ₱${item.price}`)
            .join("\n")}`
    },
}
