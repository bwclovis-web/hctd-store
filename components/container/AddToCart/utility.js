import { formatPrice } from 'lib/formatPrice'

export const getPriceByVariantId = (variants, id) => {
  const price = variants?.find(item => item.node.id === id)

  return formatPrice(price?.node?.priceV2?.amount, 'USD')
}

export const initProductPrice = variants => {
  const availableVariants = variants.filter(item => item.node.availableForSale)
  return formatPrice(availableVariants[0]?.node?.priceV2?.amount, 'USD')
}

export const getFirstJarVariant = variant => variant.filter(item => filterSelectedItems(item.node.selectedOptions).length && item)

export const filterSelectedItems = items => {
  const newArray = items.filter(item => item.value.includes('Jar')) 
  return newArray
}
