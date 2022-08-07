import { useContext } from "react"
import { FaTrash } from 'react-icons/fa'

import ShopContext from "provider/ShopProvider"

const DeleteFromCartButton = ({ id }) => {
  const { removeLineItem, checkout } = useContext(ShopContext)
  const handleDeleteItem = () => {
    removeLineItem(checkout.id, id)
  }

  return (
    <button onClick={handleDeleteItem} className="justify-self-end">
      <FaTrash size={24}/>
    </button>
  )
}

export default DeleteFromCartButton
