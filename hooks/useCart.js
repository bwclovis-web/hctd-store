import { useState, useEffect } from 'react'

const UseCart = () => {
  const [ cartOpen, setCartOpen ] = useState(false)
  const [ cartTrigger, setCartTrigger ] = useState('')
  const toggleCart = () => {
    setCartOpen(!cartOpen)
  }

  useEffect(() => {
    const root = document.documentElement
    if (cartOpen) {
      const trigger = document.getElementById('cart-close')
      root.classList.add('open')
      trigger?.focus()
    } else {
      const element = cartTrigger && document.getElementById(cartTrigger)
      root.classList.remove('open')
      if(element) {
        element.focus()
        setCartTrigger('')
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartOpen])

  return [ cartOpen, toggleCart, cartTrigger, setCartTrigger ]
}

export default UseCart
