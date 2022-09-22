import { formatPrice } from 'lib/formatPrice'

export const getPriceByVariantId = (variants, id) => {
  const price = variants?.find(item => item.node.id === id)

  return formatPrice(price?.node?.priceV2?.amount, 'USD')
}
