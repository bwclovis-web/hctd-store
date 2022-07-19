import { useContext, useEffect, useState } from "react";
import { textUtil } from "./Utility";
import Button from "../../atoms/Button/Button";
import CartContext from "../../../provider/ShopProvider";
import AppContext from "../../../provider/AppProvider";

const AddToCartButton = ({ varId, available }) => {
  const { addVariantToCart, loading, checkout } = useContext(CartContext)
  const { toggleToast } = useContext(AppContext)
  const [buttonText, setButtonText] = useState("ADD TO CART")
  const [itemStatus, setItemStatus] = useState("avail")
  const [disableButton, setDisableButton] = useState(false)

  console.log(checkout)

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
      config="default"

    >
      {buttonText}
    </Button>
  )
}
export default AddToCartButton