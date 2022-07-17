import classNames from "classnames";
import { formatPrice } from "../../../lib/formatPrice";
import { FC } from "react"
import { ToastT } from "./types";

const Toast: FC<ToastT> = ({ item, openToast }) => {
    const { amount, currencyCode } = item.variants.edges[0].node.priceV2;
    const itemPrice = formatPrice(amount, currencyCode);
    const ToastClasses = classNames({
        'fixed bg-green-700 z-20 bottom-0 right-0 opacity-0 p-4 text-white translate-x-full transition-all': true,
        'opacity-100 translate-x-0': openToast
    })

    return (
        <div className={ToastClasses}>
            <p>{item.title} has been added to cart</p>
            <p>Price: {itemPrice}</p>
        </div>
    )
}

export default Toast; 