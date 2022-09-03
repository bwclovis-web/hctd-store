import { useState, useEffect, createContext, useContext } from 'react'
import { shopClient } from '../lib/shop-client'
import AppContext from './AppProvider'

const ctxDefaults = {
  addVariantToCart: (id, amount) => { },
  removeLineItem: () => { },
  updateLineItem: () => { },
  setCartDisplayPrice: () => {},
  loading: false,
  cartDisplayPrice: '',
  shopClient,
  checkout: {
    id: '',
    lineItems: [],
  },
}

const ShopContext = createContext(ctxDefaults)

const isBrowser = typeof window !== `undefined`
const localStorageKey = `shopify_checkout_id`

export const CartProvider = ({ children }) => {
  const [ checkout, setCheckout ] = useState(ctxDefaults.checkout)
  const [ loading, setLoading ] = useState(false)
  const [ didJustAddToCart, setDidJustAddToCart ] = useState(false)
  const [ cartDisplayPrice, setCartDisplayPrice ] = useState('')
  const { toggleCart, setCartTrigger } = useContext(AppContext)

  const setCheckoutItem = checkout => {
    if (isBrowser) {
      localStorage.setItem(localStorageKey, String(checkout.id))
    }
    setCheckout(checkout)
  }

  useEffect(() => {
    const initializeCheckout = async () => {
      const existingCheckoutID = isBrowser ?
        localStorage.getItem(localStorageKey) :
        null

      if (existingCheckoutID && existingCheckoutID !== `null`) {
        try {
          const existingCheckout = await shopClient.checkout.fetch(
            existingCheckoutID
          )
          if (!existingCheckout.completedAt) {
            setCheckoutItem(existingCheckout)
            return
          }
        } catch (e) {
          localStorage.setItem(localStorageKey, '')
        }
      }

      const newCheckout = await shopClient.checkout.create()
      setCheckoutItem(newCheckout)
    }

    initializeCheckout()
  }, [])

  const addVariantToCart = async (variantId, quantity) => {
    setLoading(true)
    const checkoutID = checkout.id
    const lineItemsToUpdate = [{
      variantId,
      quantity: parseInt(quantity, 10),
    }]

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })

    return await shopClient.checkout
      .addLineItems(checkoutID, lineItemsToUpdate)
      .then(res => {
        setCheckout(res)
        setLoading(false)
        setDidJustAddToCart(true)
        // toggleCart()
        setCartTrigger('add-to-cart')
        setTimeout(() => setDidJustAddToCart(false), 3000)
      })
  }

  const removeLineItem = async (checkoutID, lineItemID) => {
    setLoading(true)

    return await shopClient.checkout
      .removeLineItems(checkoutID, [lineItemID])
      .then(res => {
        setCheckout(res)
        setLoading(false)
      })
  }

  const updateLineItem = async (checkoutID, lineItemID, quantity) => {
    setLoading(true)

    const lineItemsToUpdate = [{ id: lineItemID, quantity: parseInt(quantity, 10) }]

    return await shopClient.checkout
      .updateLineItems(checkoutID, lineItemsToUpdate)
      .then(res => {
        setCheckout(res)
        setLoading(false)
      })
  }

  return (
    <ShopContext.Provider value={{
      ...ctxDefaults,
      addVariantToCart,
      removeLineItem,
      updateLineItem,
      checkout,
      loading,
      didJustAddToCart,
      shopClient,
      cartDisplayPrice,
      setCartDisplayPrice
    }}>
      {children}
    </ShopContext.Provider>
  )
}

export default ShopContext
