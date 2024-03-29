import { useContext, useEffect, useState } from 'react'
import Image from "next/legacy/image"
import ShopContext from 'provider/ShopProvider'

import DeleteFromCartButton from "./DeleteFromCartButton"
import QuantityControls from './QuantityControls'
import { formatPrice } from 'lib/formatPrice'

const ShoppingCartItem = ({ data }) => {
  const { attrs, image } = data.variant
  const dyeTitle = attrs.selectedOptions[0].name.toLowerCase() === 'size' ? attrs.selectedOptions[0].name.toLowerCase() : null
  const [ itemQuantity, setItemQuantity ] = useState(data.quantity)
  const { checkout, updateLineItem } = useContext(ShopContext)

  const updateItemQuantity = func => {
    func === "add" ? setItemQuantity(itemQuantity + 1) : setItemQuantity(itemQuantity - 1)
  }

  useEffect(() => {
    updateLineItem(checkout.id, data.id, itemQuantity)
  }, [ itemQuantity, checkout.id, data.id ])

  return(
    <li className="flex content-start w-full mb-4">
      <div className="bg-purple-200/40 flex w-full justify-between items-center py-2 px-3 rounded border-2 border-purple-300">
        <div className="flex justify-between items-center w-1/2">
          <div className="flex flex-col">
            <span className="text-xl tracking-wider">{data.title}</span>
            <div className="flex flex-col mr-4">
              {dyeTitle && <span className="text-base">{attrs.title.value}</span>}
              <span className="text-md mt-2 flex items-center">{formatPrice(attrs.price.amount, 'USD')} {dyeTitle && <QuantityControls action={updateItemQuantity} quantity={itemQuantity} />}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2">
          <div className="cart-image">
            <Image alt="" src={image.src} width={60} height={60}/>
          </div>
          <DeleteFromCartButton id={data.id} />
        </div>
      </div>
    </li>
  )
}

export default ShoppingCartItem
