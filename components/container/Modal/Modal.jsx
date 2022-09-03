import classNames from 'classnames'
import AppContext from 'provider/AppProvider'
import { useContext, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

const Modal = ({ children, open }) => {
  const [ mounted, setMounted ] = useState(false)
  const [ animate, setAnimate ] = useState(false)
  const { toggleModal } = useContext(AppContext)

  useEffect(() => {
    setMounted(true)
    setTimeout(() => {
      setAnimate(true)
    }, 140)

    return () => setMounted(false)
  }, [])


  const ModalClasses = classNames({
    "fixed w-full h-full bg-violet-700/90 translate-y-0 z-20 top-0 flex transition-all justify-center items-center opacity-0": true,
    "opacity-100 transition-all": animate
  })

  const ModalContentClasses = classNames({
    'relative -translate-y-80 opacity-0 z-30 transition-all delay-300': true,
    'opacity-100 -translate-y-0 transition-all delay-100': animate
  })

  const template = (
    <div className={ModalClasses} onClick={toggleModal}>
      <div className={ModalContentClasses}>{children}</div>
    </div>
  )

  return mounted ?
    createPortal(template, 
      document.querySelector("#modal-portal")) :
    null
}

export default Modal
