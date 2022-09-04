import Button from 'components/atoms/Button/Button'
import FormContainer from 'components/container/Forms/SignUp/FormContainer'
import Modal from 'components/container/Modal/Modal'
import AppContext from 'provider/AppProvider'
import { useContext } from 'react'
import { BsPersonCircle } from 'react-icons/bs'

const CustomerProfileButton = () => {
  const { toggleModal, modalOpen } = useContext(AppContext)
  return (
    <>
      <a href={`https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_URL}/account`}>
        <span className="sr-only">My account</span>
        <BsPersonCircle size={30}/>
      </a>
      {modalOpen && 
        <Modal open={modalOpen}>
          <FormContainer />
        </Modal>
      }
    </>
  )
}

export default CustomerProfileButton
