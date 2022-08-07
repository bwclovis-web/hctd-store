import { useState, useEffect } from 'react'

const UseCart = () => {
  const [ cartOpen, setCartOpen ] = useState(false)
  const [ cartTrigger, setCartTrigger ] = useState('')
  const toggleCart = () => {
    setCartOpen(!cartOpen)
  }

  useEffect(() => {
    if (cartOpen) {
      const trigger = document.getElementById('cart-close')
      trigger?.focus()
    } else {
      const element = cartTrigger && document.getElementById(cartTrigger)
      if(element) {
        element.focus()
        setCartTrigger('')
      }
    }
  }, [cartOpen])

  return [ cartOpen, toggleCart, cartTrigger, setCartTrigger ]
}

export default UseCart
