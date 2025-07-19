import { useContext, useEffect, useState } from "react"
import { RiShoppingCartLine, RiShoppingCartFill } from 'react-icons/ri'

import AppContext from "provider/AppProvider"
import ShopContext from "provider/ShopProvider"

import Button from "components/atoms/Button/Button"
import ShoppingCartComponent from "components/container/ShoppingCartComponent/ShoppingCartComponent"
import classNames from "classnames"

const ShoppingCartButton = () => {
  const { checkout } = useContext(ShopContext)
  const { toggleCart, setCartTrigger } = useContext(AppContext)
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

  const handleOpenCart = () => {
    toggleCart()
    setCartTrigger("hctd-cart")
  }

  const cartIconClasses = classNames({
    "bg-orange-400 block rounded-full h-6 w-6 flex justify-center items-center transition-all border border-white ": true,
    "opacity-0": !checkout.lineItems.length,
    "opacity-100 -translate-x-3 -translate-y-1": checkout.lineItems.length
  })

  return (
    <>
      <Button id="hctd-cart" onClick={handleOpenCart} config="cart" label={buttonText}>
        <div className="flex justify-start items-start">
          {itemsInCart === 0 ? <RiShoppingCartLine size={30} /> : <RiShoppingCartFill size={30} />}
          <span className={cartIconClasses} aria-hidden>{itemsInCart}</span>
        </div>
      </Button>
      <ShoppingCartComponent />
    </>
  )
}

export default ShoppingCartButton
