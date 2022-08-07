import { createContext } from 'react'
import UseCart from '../lib/useApp'
import UseToast from '../lib/UseToast'

const ctxDefaults = {
  toggleCart: () => { },
  toggleToast: () => { },
  cartOpen: false,
  toast: false
}

const AppContext = createContext(ctxDefaults)

export const AppProvider = ({ children }) => {
  const [ cartOpen, toggleCart ] = UseCart()
  const [ toast, toggleToast ] = UseToast()

  return (
    <AppContext.Provider value={{
      ...ctxDefaults,
      cartOpen,
      toggleCart,
      toast,
      toggleToast
    }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContext
