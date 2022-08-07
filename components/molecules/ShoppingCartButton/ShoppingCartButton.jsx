import { useContext, useEffect, useState } from "react"
import { RiShoppingCartLine, RiShoppingCartFill } from 'react-icons/ri'

import AppContext from "provider/AppProvider"
import ShopContext from "provider/ShopProvider"

import Button from "components/atoms/Button/Button"
import ShoppingCartComponent from "components/container/ShoppingCartComponent/ShoppingCartComponent"

const ShoppingCartButton = () => {
  const { checkout } = useContext(ShopContext)
  const { toggleCart } = useContext(AppContext)
  const [ itemsInCart, setItemsInCart ] = useState(0)
  const [ buttonText, setButtonText ] = useState('open cart')

  useEffect(() => {
    setItemsInCart(checkout.lineItems.length)
    if (checkout.lineItems.length) {
      setButtonText(`there are ${checkout.lineItems.length} items in your cart, open cart to view`)
    } else {
      setButtonText('open cart')
    }
  }, [checkout])

  return (
    <>
      <Button onClick={() => toggleCart()} config="svg" label={buttonText}>
        {itemsInCart === 0 ? <RiShoppingCartLine size={30} /> : <RiShoppingCartFill size={30} />}
      </Button>
      <ShoppingCartComponent />
    </>
  )
}

export default ShoppingCartButton
