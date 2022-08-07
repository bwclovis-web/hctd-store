import DeleteFromCartButton from "./DeleteFromCartButton"
import Image from 'next/image'
const ShoppingCartItem = ({ data }) => (
    <li className="flex content-start w-full mb-4">
      <div className="bg-white/20 flex w-full justify-between py-2 px-3 rounded">
        <div className="flex">
          <div className="flex flex-col mr-4">
            <span className="text-lg">{data.title} x {data.quantity}</span>
            <span className="text-md">${data.variant.attrs.price.value}</span>
          </div>
          <Image alt=""src={data.variant.image.src} width={60} height={20}/>
        </div>
        <DeleteFromCartButton id={data.id} />
      </div>
    </li>
  )

export default ShoppingCartItem
