import { useEffect, useRef, useContext } from "react";
import ShoppingCartItem from "./bones/ShoppingCardItem";
import CartContext from "../../../provider/ShopProvider";
import AppContext from "../../../provider/AppProvider"
import EmptyCart from "./bones/EmptyCart";
import Button from "../../atoms/Button/Button";
import { formatPrice } from "../../../lib/formatPrice";
import classNames from "classnames";
import Link from "next/link";

const ShoppingCartComponent = () => {
    const {  checkout, loading } = useContext(CartContext)
    const {toggleCart, cartOpen } = useContext(AppContext)
    const emptyCart = checkout.lineItems.length === 0
    const cartRef = useRef()

    useEffect(() => {
        function handleClickOutside(event) {
            if (cartRef.current && cartRef.current.contains(event.target)) {
                toggleCart()
            }
        }
        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [cartOpen, checkout, toggleCart])

    const handleCheckout = () => {
        toggleCart()
        window.open(checkout.webUrl)
    }

    const CartClasses = classNames({
        "fixed top-0 right-0 h-full w-full z-50 md:w-1/2 xl:w-1/4 bg-red-300 transition": true,
        "translate-x-full": !cartOpen,
        "translate-x-0": cartOpen
    })

    return (
        <>
            <div aria-hidden={!cartOpen}>
                {cartOpen && <div className="bg-black/70 fixed top-0 h-full w-full z-40 left-0 backdrop-blur-sm transition-all" ref={cartRef} />}
                <section className={CartClasses}>
                    <div className="flex items-center justify-between px-8 py-2 bg-white/20">
                        <p className="text-lg uppercase">Items in cart</p>
                        <span className="bg-blue-400 rounded-full w-8 h-8 flex justify-center items-center">
                            <Button id="cart-close" onClick={() => toggleCart()} config="svg" aria-label="close cart">
                                x
                            </Button>
                        </span>
                    </div>
                    {emptyCart ? <EmptyCart toggleCart={toggleCart} /> :
                        (
                            <div className="px-5">
                                <ul className="flex justify-start flex-col py-6">
                                    {checkout.lineItems.map(item => {
                                        return <ShoppingCartItem data={item} key={item.id} />
                                    })}
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
                </section>
            </div>
        </>
    )
}

export default ShoppingCartComponent