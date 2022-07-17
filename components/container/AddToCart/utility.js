import { formatPrice } from "../../../lib/formatPrice"

export const getPriceByVariantId = (variants) => {
    const price = variants.find(item => {
        return item.node.id === id 
    })

    return formatPrice(price.node.priceV2.amount, "USD")
}
