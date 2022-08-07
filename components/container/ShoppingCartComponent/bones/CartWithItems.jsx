import { useContext } from "react"
import Link from "next/link"

import AppContext from "provider/AppProvider"
import ShopContext from "provider/ShopProvider"

import Button from "components/atoms/Button/Button"
import ShoppingCartItem from "./ShoppingCardItem"

import { formatPrice } from "lib/formatPrice"


const CartWithItems = ({ checkout }) => {
  const { loading } = useContext(ShopContext)
  const { toggleCart } = useContext(AppContext)
  const handleCheckout = () => {
    toggleCart()
    window.open(checkout.webUrl)
  }
  return (
    <div className="px-5">
      <ul className="flex justify-start flex-col py-6">
        {checkout.lineItems.map(item => <ShoppingCartItem data={item} key={item.id} />)}
      </ul>
      <div className="checkout-details">
        <p>
          <span>Subtotal: </span>
          <span>{formatPrice(checkout.subtotalPrice, "USD")}</span>
        </p>
        <p>
          <span>Taxes: </span>
          <span>{formatPrice(checkout.totalTax, "USD")}</span>
        </p>
        <p>
          <span>Shipping(est): </span>
          <span>{formatPrice(checkout?.shippingLine?.price, "USD")}</span>
        </p>
        <p>
          <span>Total at checkout: </span>
          <span>{formatPrice(checkout.totalPrice, "USD")}</span>
        </p>
      </div>
      <div className="flex justify-between items-center fixed bg-red-400 min-w-full left-0 bottom-0 px-8 py-4">
        <Button config="secondary" onClick={handleCheckout} size="small" disabled={loading}>GO TO CHECKOUT</Button>
        <Link href={'/shop'} >
          <a onClick={() => toggleCart()} className="underline underline-offset-4">Continue Shopping</a>
        </Link>
      </div>
    </div>
  )
}

export default CartWithItems
