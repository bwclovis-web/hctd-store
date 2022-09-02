import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

const Modal = ({ children }) => {
  const [ mounted, setMounted ] = useState(false)
  useEffect(() => {
    setMounted(true)

    return () => setMounted(false)
  }, [])

  const template = (
    <div>OH MI BALLZ</div>
  )

  return mounted ?
    createPortal(template, 
      document.querySelector("#modal-portal")) :
    null
}
  

export default Modal


