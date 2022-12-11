import Link from "next/link"
import { useContext } from "react"

import AppContext from "provider/AppProvider"

const EmptyCart = () => {
  const { toggleCart } = useContext(AppContext)
  return (
    <section className="flex justify-center h-2/4 flex-col text-lg items-center">
      <p className="font-semibold text-2xl mb-10">Your cart is empty</p>
      <div>
        <Link href="/shop" onClick={toggleCart} className="ghost-link _light">
          Go to shop page
        </Link>
      </div>
    </section>
  );
}

export default EmptyCart 
