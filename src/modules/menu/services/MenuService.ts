import { menuConfig } from "../config/menuConfig"

import type { Category, MenuItem, MenuSizeLabel } from "../types/menu"

export class MenuService {
    getAll(): MenuItem[] {
        return menuConfig
    }

    getAvailable(): MenuItem[] {
        return menuConfig.filter((item) => item.available)
    }

    getById(id: string): MenuItem | undefined {
        return menuConfig.find((item) => item.id === id)
    }

    getByName(name: string): MenuItem | undefined {
        return menuConfig.find(
            (item) => item.name.toLowerCase() === name.toLowerCase(),
        )
    }

    getByCategory(category: Category): MenuItem[] {
        return menuConfig.filter((item) => item.category === category)
    }

    getByTag(tag: string): MenuItem[] {
        return menuConfig.filter((item) =>
            item.tags?.includes(tag.toLowerCase()),
        )
    }

    getByAllergen(allergen: string): MenuItem[] {
        return menuConfig.filter((item) =>
            item.allergens?.includes(allergen.toLowerCase()),
        )
    }

    getPrice(name: string, size?: MenuSizeLabel): number | undefined {
        const item = this.getByName(name)

        if (!item) {
            return undefined
        }

        if (!size || !item.sizes) {
            return item.price
        }

        const menuSize = item.sizes.find((s) => s.label === size)

        if (!menuSize) {
            return item.price
        }

        return item.price + menuSize.priceModifier
    }
}
