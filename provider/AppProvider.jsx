import { createContext } from 'react'
import UseCart from '../lib/useApp'
import UseToast from '../lib/UseToast'

const ctxDefaults = {
  toggleCart: () => { },
  toggleToast: () => { },
  setCartTrigger: () => {},
  cartOpen: false,
  toast: false,
  cartTrigger: ''
}

const AppContext = createContext(ctxDefaults)

export const AppProvider = ({ children }) => {
  const [ cartOpen, toggleCart, cartTrigger, setCartTrigger ] = UseCart()
  const [ toast, toggleToast ] = UseToast()

  return (
    <AppContext.Provider value={{
      ...ctxDefaults,
      cartOpen,
      toggleCart,
      toast,
      toggleToast,
      cartTrigger,
      setCartTrigger
    }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContext
