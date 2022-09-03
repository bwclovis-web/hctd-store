import { useState, useCallback, useEffect } from 'react'

const UseModal = () => {
  const [ modalOpen, setShowModal ] = useState(false)
  const toggleModal = useCallback(() => setShowModal(!modalOpen), [modalOpen])

  useEffect(() => {
    const root = document.documentElement
    return modalOpen ?
      root.classList.add('open') :
      root.classList.remove('open')
  }, [modalOpen])

  return [ toggleModal, modalOpen ]
}

export default UseModal
