import { setFocusTrap } from 'lib/trapFocus'
import { useState, useEffect } from 'react'

const UseCart = () => {
  const [ cartOpen, setCartOpen ] = useState(false)
  const [ cartTrigger, setCartTrigger ] = useState('')
  const toggleCart = () => {
    setCartOpen(!cartOpen)
  }

  useEffect(() => {
    const cart = document.getElementById('cart')
    setTimeout(() => {
      setFocusTrap(cart, 'hctd-cart')
    }, 1000)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (cartOpen) {
      const cart = document.getElementById('cart')
      const trigger = document.getElementById('cart-close')
      root.classList.add('open')
      setFocusTrap(cart)
      trigger?.focus()
    } else {
      const element = cartTrigger && document.getElementById(cartTrigger)
      root.classList.remove('open')
      setFocusTrap(cart, 'hctd-cart')
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
