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
      <Button id="profile" label="not signed in" config="icon" onClick={toggleModal}>
        <BsPersonCircle size={30}/>
      </Button>
      {modalOpen && 
        <Modal open={modalOpen}>
          <FormContainer />
        </Modal>
      }
    </>
  )
}

export default CustomerProfileButton
