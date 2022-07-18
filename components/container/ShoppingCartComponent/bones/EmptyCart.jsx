import Link from "next/link";
import { useContext } from "react";
import CartContext from "../../../../provider/AppProvider";

const EmptyCart = () => {
    const { toggleCart } = useContext(CartContext)
    return (
        <section className="flex justify-center h-2/4 flex-col text-lg items-center">
            <p className="font-semibold text-xl mb-8">There nothing in your cart</p>
            <div>
                <Link href="/shop">
                    <a onClick={toggleCart} className="ghost-link _small">Go to shop page</a>
                </Link>
            </div>
            <span className="p-4 font-semibold">or</span>
            <Link href="/shop/category">
                <a className="underline" onClick={toggleCart}>shop by category</a>
            </Link>
        </section>
    )
}

export default EmptyCart; 