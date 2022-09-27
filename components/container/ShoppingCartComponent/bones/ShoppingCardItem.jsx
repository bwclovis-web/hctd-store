import { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import ShopContext from 'provider/ShopProvider'

import DeleteFromCartButton from "./DeleteFromCartButton"
import QuantityControls from './QuantityControls'

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
  }, [itemQuantity])


  return(
    <li className="flex content-start w-full mb-4">
      <div className="bg-white/20 flex w-full justify-between items-center py-2 px-3 rounded">
        <div className="flex justify-between items-center w-1/2">
          <div className="flex flex-col">
            <span className="text-xl tracking-wider">{data.title}</span>
            <div className="flex flex-col mr-4">
              {dyeTitle && <span className="text-base">{attrs.title.value}</span>}
              <span className="text-md mt-2 flex items-center">${attrs.price.value} {dyeTitle && <QuantityControls action={updateItemQuantity} quantity={itemQuantity} />}</span>
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
