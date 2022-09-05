import { BsPersonCircle } from 'react-icons/bs'

const CustomerProfileButton = () => (
  <>
    <a href={`https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_URL}/account`}>
      <span className="sr-only">My account</span>
      <BsPersonCircle size={30}/>
    </a>
  </>
)

export default CustomerProfileButton
