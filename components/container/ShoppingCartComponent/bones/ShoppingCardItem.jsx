import Image from 'next/image'

import DeleteFromCartButton from "./DeleteFromCartButton"

const ShoppingCartItem = ({ data }) => (
  <li className="flex content-start w-full mb-4">
    <div className="bg-white/20 flex w-full justify-between items-center py-2 px-3 rounded">
      <div className="flex justify-center items-center">
        <div className="flex flex-col mr-4">
          <span className="text-xl tracking-wider pb-2">{data.title} x {data.quantity}</span>
          <span className="text-md">${data.variant.attrs.price.value}</span>
        </div>
        <div className="cart-image">
          <Image alt="" src={data.variant.image.src} width={60} height={60}/>
        </div>
      </div>
      <DeleteFromCartButton id={data.id} />
    </div>
  </li>
)

export default ShoppingCartItem
