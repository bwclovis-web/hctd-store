import { useContext } from "react"
import { FaTrash } from 'react-icons/fa'

import ShopContext from "provider/ShopProvider"

const DeleteFromCartButton = ({ id }) => {
  const { removeLineItem, checkout, loading } = useContext(ShopContext)
  const handleDeleteItem = () => {
    removeLineItem(checkout.id, id)
  }

  return (
    <button onClick={handleDeleteItem} disabled={loading} className="text-white transition shadow bg-rose-600/70 flex items-center w-12 h-12 justify-center rounded-full hover:bg-rose-600 active:translate-y-2">
      <FaTrash size={24}/>
    </button>
  )
}

export default DeleteFromCartButton
