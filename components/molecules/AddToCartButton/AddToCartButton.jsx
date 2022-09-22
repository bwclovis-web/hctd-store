import { useContext, useState } from "react"

import AppContext from "provider/AppProvider"
import ShopContext from "provider/ShopProvider"

import Button from "components/atoms/Button/Button"

const AddToCartButton = ({ varId, available }) => {
  const { addVariantToCart, loading, checkout } = useContext(ShopContext)
  const { toggleToast } = useContext(AppContext)
  const [ buttonText, setButtonText ] = useState("ADD TO CART")
  const [ itemStatus, setItemStatus ] = useState("avail")
  const [ disableButton, setDisableButton ] = useState(false)

  const addToCart = () => {
    addVariantToCart(varId, '1')
    toggleToast()
  }

  return (
    <Button
      type="submit"
      onClick={() => addToCart()}
      itemStatus={itemStatus}
      disabled={loading || disableButton || !varId}
      size="large"
      config="success"
      id="add-to-cart"
    >
      {buttonText}
    </Button>
  )
}
export default AddToCartButton
