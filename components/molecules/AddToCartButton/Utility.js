export const textUtil = () => {
  const config = { text: 'ADD TO CART', status: 'avail', disableButton: false }

  checkout?.lineItems?.map(item => {
    if (item.quantity >= 1 && item.variant.id === passedId) {
      config.text = 'ITEM IN CART'
      config.status = 'cart'
      config.disableButton = true
    }
  })

  if (!avail) {
    config.text = 'OUT OF STOCK'
    config.status = 'out'
    config.disableButton = true
  }

  return config
}
