import { useState, useCallback, useEffect } from 'react'

const UseModal = () => {
  const [ modalOpen, setShowModal ] = useState(false)
  const [ modalId, setModalId ] = useState('')
  const toggleModal = useCallback(id => { 
    setShowModal(!modalOpen)
    if(typeof id === 'string') {
      setModalId(id)
    } else {
      setModalId('')
    }
  }, [modalOpen])

  useEffect(() => {
    const root = document.documentElement
    return modalOpen ?
      root.classList.add('open') :
      root.classList.remove('open')
  }, [modalOpen])

  return [ toggleModal, modalOpen, modalId ]
}

export default UseModal
