import {useContext} from "react"
import CartContext from "../../../../provider/ShopProvider"
import {FaTrash} from 'react-icons/fa'

const DeleteFromCartButton = ({id}) => {
const {removeLineItem, checkout} = useContext(CartContext)
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
