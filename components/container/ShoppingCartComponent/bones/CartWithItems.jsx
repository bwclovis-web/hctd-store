import { useContext } from "react"
import Link from "next/link"

import AppContext from "provider/AppProvider"
import ShopContext from "provider/ShopProvider"

import Button from "components/atoms/Button/Button"
import ShoppingCartItem from "./ShoppingCardItem"

import { formatPrice } from "lib/formatPrice"

const CartWithItems = () => {
  const { loading, checkout } = useContext(ShopContext)
  const { toggleCart } = useContext(AppContext)

  const handleCheckout = () => {
    toggleCart()
    window.open(checkout.webUrl)
  }

  return (
    <div className="h-full text-red-900">
      <div className="flex flex-col pb-20 overflow-y-auto h-full px-4 ">
        <ul className="flex justify-start flex-col py-6">
          {checkout.lineItems.map(item => <ShoppingCartItem data={item} key={item.id} />)}
        </ul>
        <div className="checkout-details h-max pb-20 px-4">
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
            <span>{checkout?.shippingLine ? formatPrice(checkout?.shippingLine?.price, "USD" ) : "calculated at checkout"}</span>
          </p>
          <p>
            <span>Total at checkout: </span>
            <span>{formatPrice(checkout.totalPrice, "USD")}</span>
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center fixed bg-purple-200/40 min-w-full left-0 bottom-0 px-3 py-4">
        <Button config="ghost" onClick={handleCheckout} size="small" disabled={loading}>GO TO CHECKOUT</Button>
        <Link href={'/shop'} >
          <a onClick={() => toggleCart()} className="underline p-2 transition-colors underline-offset-4 hover:bg-purple-500 hover:text-purple-100">Continue Shopping</a>
        </Link>
      </div>
    </div>
  )
}

export default CartWithItems
