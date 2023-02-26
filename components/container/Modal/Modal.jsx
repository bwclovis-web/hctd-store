import { useContext, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import classNames from 'classnames'
import { AiOutlineCloseCircle } from 'react-icons/ai'

import AppContext from 'provider/AppProvider'

const Modal = ({ children }) => {
  const [ mounted, setMounted ] = useState(false)
  const [ animate, setAnimate ] = useState(false)
  const [ windowPosition, setWindowPosition ] = useState(0)
  const { toggleModal } = useContext(AppContext)
  const outerRef = useRef(null)

  useEffect(() => {
    const here = document.documentElement.scrollTop
    setWindowPosition(parseInt(here))
    setTimeout(() => {
      setMounted(true)
    }, 60)
    
    return () => setMounted(false)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true)
    }, 140)
  }, [ mounted, windowPosition ])

  const ModalClasses = classNames({
    "fixed w-full h-full bg-violet-700/90 z-20 transition-all top-0 backdrop-blur-md ": true,
    "opacity-100 transition-all": animate,
    "opacity-0": !animate
  })
  
  const ModalContentClasses = classNames({
    'fixed  z-30 rounded transition-all delay-300 p-4 xl:p-8 duration-500 w-full lg:w-4/5 xl:w-2/5 pointer-none flex': true,
    'opacity-0 lg:-translate-y-80   h-3/4': !animate,
    'opacity-100 lg:-translate-y-0 transition-animate delay-200 bg-white/80 shadow-2xl duration-300 top-3 overflowY-auto h-auto': animate
  })


  const template = (
    <div id="modalContainer" className="absolute h-full w-full z-20 flex justify-center items-center" ref={outerRef}>
      <div className={ModalClasses} onClick={toggleModal} />
      <div className={ModalContentClasses}>
        <button className="absolute top-5 right-5" onClick={toggleModal}>
          <AiOutlineCloseCircle size={34} fill={'purple'}/>
        </button>
        {children}
      </div>
    </div>
  )

  return mounted ?
    createPortal(template, document.querySelector("#modal-portal")) : null
}

export default Modal
