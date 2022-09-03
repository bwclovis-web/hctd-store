/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'

const UseToast = () => {
  const [ toast, setShowToast ] = useState(false)
  const toggleToast = () => {
    setShowToast(!toast)
  }

  useEffect(() => {
    if(toast) {
      setTimeout(() => {
        toggleToast()
      }, 4500)
    }
  }, [toast])

  return [ toast, toggleToast ]
}

export default UseToast
