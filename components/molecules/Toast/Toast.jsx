import { useContext } from "react"
import classNames from "classnames"
import ShopContext from "../../../provider/ShopProvider"

const Toast = ({ item, openToast }) => {
    const {cartDisplayPrice} = useContext(ShopContext)
    const ToastClasses = classNames({
        'fixed bg-green-700 z-20 bottom-0 right-0 opacity-0 p-4 text-white translate-x-full transition-all': true,
        'opacity-100 translate-x-0': openToast
    })

    return (
        <div className={ToastClasses}>
            <p>{item.title} has been added to cart</p>
            <p>Price: {cartDisplayPrice}</p>
        </div>
    )
}

export default Toast; 