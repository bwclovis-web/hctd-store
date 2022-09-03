import { useContext, useEffect, useState } from 'react'
import { FaPlusSquare, FaMinusSquare } from 'react-icons/fa'
import Button from 'components/atoms/Button/Button'
import Image from 'next/image'
import ShopContext from 'provider/ShopProvider'

import DeleteFromCartButton from "./DeleteFromCartButton"

const ShoppingCartItem = ({ data }) => {
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
        <div className="flex justify-center items-center">
          <div className="flex flex-col mr-4">
            <span className="text-xl tracking-wider pb-2">{data.title}</span>
            <span className="text-md">${data.variant.attrs.price.value}</span>
          </div>
          <div className="cart-image">
            <Image alt="" src={data.variant.image.src} width={60} height={60}/>
          </div>
          <div className="flex items-center ml-10">
            <Button onClick={() => updateItemQuantity('delete')} config="svg">
              <span className="text-amber-800/70 ">
                <FaMinusSquare size={40}/>
              </span>
            </Button>
            <span className="text-2xl px-2 font-semibold">{itemQuantity}</span>
            <Button onClick={() => updateItemQuantity('add')} config="svg">
              <span className="text-amber-800/70 block">
                <FaPlusSquare size={40}/>
              </span>
            </Button>
          </div>
        </div>
        <DeleteFromCartButton id={data.id} />
      </div>
    </li>
  )
}

export default ShoppingCartItem
