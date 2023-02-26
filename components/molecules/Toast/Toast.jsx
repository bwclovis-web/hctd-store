import { useContext } from "react"
import classNames from "classnames"
import ShopContext from "provider/ShopProvider"

const Toast = ({ item, openToast }) => {
  const { cartDisplayPrice } = useContext(ShopContext)
  const ToastClasses = classNames({
    'fixed bg-green-700 z-20 bottom-0 right-0 shadow-xl  p-4 border-2 rounded-tl-xl text-white  transition-all': true,
    'opacity-0 translate-x-full': !openToast,
    'opacity-100 translate-x-0': openToast
  })

  return (
    <div className={ToastClasses}>
      <p><span className="text-xl font-semibold">{item.title}</span> has been added to cart</p>
      <p className="mt-1"><span className="text-xl font-semibold">Price:</span> {cartDisplayPrice}</p>
    </div>
  )
}

export default Toast 
