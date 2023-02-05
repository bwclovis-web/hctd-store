import UseModal from 'hooks/UseModal'
import { createContext, useState, useEffect, useLayoutEffect } from 'react'
import UseCart from 'hooks/useCart'
import UseToast from 'hooks/UseToast'
import UseNavigation from 'hooks/useNavigation'
import { getScreenSize } from 'utils/getScreenSize'

const ctxDefaults = {
  toggleCart: () => { },
  toggleToast: () => { },
  toggleModal: () => {},
  setCartTrigger: () => {},
  toggleNav: () => {},
  cartOpen: false,
  modalOpen: false,
  navOpen: false,
  toast: false,
  modalId: '',
  cartTrigger: ''
}

const AppContext = createContext(ctxDefaults)

export const AppProvider = ({ children }) => {
  const [ cartOpen, toggleCart, cartTrigger, setCartTrigger ] = UseCart()
  const [ toast, toggleToast ] = UseToast()
  const [ toggleModal, modalOpen, modalId ] = UseModal()
  const [ navOpen, toggleNav ] = UseNavigation()

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
      modalOpen,
      modalId,
      navOpen,
      toggleNav
    }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContext
