import { useContext, useEffect, useState, FC } from "react";
import { textUtil } from "./Utility";
// import Button from "../../atoms/Button/Button";
import CartContext from "../../../provider/AppProvider";
import { AddCartT } from './types'

const AddToCartButton = ({ varId, available }) => {
  const { addVariantToCart, loading, checkout, toggleToast } = useContext(CartContext)
  const [buttonText, setButtonText] = useState("ADD TO CART")
  const [itemStatus, setItemStatus] = useState("avail")
  const [disableButton, setDisableButton] = useState(false)

  useEffect(() => {
    const config = textUtil(checkout, available, varId)
    setButtonText(config.text)
    setItemStatus(config.status)
    setDisableButton(config.disableButton)
  }, [available, checkout, varId, loading])

  const addToCart = () => {
    addVariantToCart(varId, '1')
    toggleToast()
  }

  return (
    <button
      type="submit"
      onClick={() => addToCart()}

    >
      {buttonText}
    </button>
  )
}
export default AddToCartButton