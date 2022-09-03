import UseModal from 'hooks/UseModal'
import { createContext } from 'react'
import UseCart from 'hooks/useCart'
import UseToast from 'hooks/UseToast'

const ctxDefaults = {
  toggleCart: () => { },
  toggleToast: () => { },
  toggleModal: () => {},
  setCartTrigger: () => {},
  cartOpen: false,
  modalOpen: false,
  toast: false,
  cartTrigger: ''
}

const AppContext = createContext(ctxDefaults)

export const AppProvider = ({ children }) => {
  const [ cartOpen, toggleCart, cartTrigger, setCartTrigger ] = UseCart()
  const [ toast, toggleToast ] = UseToast()
  const [ toggleModal, modalOpen ] = UseModal()

  return (
    <AppContext.Provider value={{
      ...ctxDefaults,
      cartOpen,
      toggleCart,
      toast,
      toggleToast,
      cartTrigger,
      setCartTrigger,
      toggleModal,
      modalOpen
    }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContext
