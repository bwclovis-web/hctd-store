import classNames from 'classnames'
import AppContext from 'provider/AppProvider'
import { useContext, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

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
    if (mounted) {
      const container = document.getElementById('modalContainer')
      container.style.top = `${windowPosition}px`
    }
    setTimeout(() => {
      setAnimate(true)
    }, 140)
  }, [ mounted, windowPosition ])

  const ModalClasses = classNames({
    "fixed w-full h-full bg-violet-700/90 z-20 transition-all opacity-0 top-0": true,
    "opacity-100 transition-all": animate
  })
  
  const ModalContentClasses = classNames({
    'relative lg:-translate-y-80 opacity-0 z-30 rounded transition-all delay-300 p-4 xl:p-10  duration-500 backdrop-blur-md lg:w-4/5 xl:w-2/5 pointer-none overflow-auto flex h-full md:h-auto': true,
    'opacity-100 lg:-translate-y-0 transition-animate delay-200 bg-white/60 shadow-2xl duration-300': animate
  })


  const template = (
    <div id="modalContainer" className={`absolute h-full w-full z-10 flex justify-center items-center`} ref={outerRef}>
      <div className={ModalClasses} onClick={toggleModal} />
      <div className={ModalContentClasses}>{children}</div>
    </div>
  )

  return mounted ?
    createPortal(template, document.querySelector("#modal-portal")) : null
}

export default Modal
