import { useEffect, useRef, useContext } from "react"
import CartContext from "../../../provider/ShopProvider"
import AppContext from "../../../provider/AppProvider"
import EmptyCart from "./bones/EmptyCart"
import Button from "../../atoms/Button/Button"
import classNames from "classnames"
import CartWithItems from "./bones/CartWithItems"

const ShoppingCartComponent = () => {
    const {checkout} = useContext(CartContext)
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
    }, [ cartOpen, checkout, toggleCart ])

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
                    {
                        emptyCart ? 
                        <EmptyCart toggleCart={toggleCart} /> : 
                        <CartWithItems checkout={checkout} />
                    }
                </section>
            </div>
        </>
    )
}

export default ShoppingCartComponent
