import DeleteFromCartButton from "./DeleteFromCartButton";

const ShoppingCartItem = ({ data }) => {
  return (
    <li className="flex content-start w-full mb-4">
      <div className="bg-white/20 flex w-full justify-between py-2 px-3 rounded">
        <div className="flex flex-col">
          <span className="text-lg">{data.title} x {data.quantity}</span>
          <span className="text-md">${data.variant.attrs.price.value}</span>
        </div>
        <DeleteFromCartButton id={data.id} />
      </div>
    </li>
  )
}

export default ShoppingCartItem;