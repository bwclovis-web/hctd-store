import { GrFacebook, GrInstagram } from 'react-icons/gr'
import CustomerProfileButton from '../CustomerProfileButton/CustomerProfileButton'
import ShoppingCartButton from "../ShoppingCartButton/ShoppingCartButton"

const UtilNav = () => (
  <div className="flex justify-between border-b-2 border-indigo-100 items-center py-1 px-2">
    <a href="#main" className="bg-indigo-100 p-2 opacity-0 focus:opacity-100 text-lg">skip to main</a>
    <div className="flex justify-center items-center">
      <CustomerProfileButton/>
      <ShoppingCartButton />
      <ul className="border-l-2 ml-5 border-indigo-100 pl-5 flex gap-3">
        <li>
          <a href="https://www.facebook.com/groups/1259074817923302">
            <GrFacebook size={25}/>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/groups/1259074817923302">
            <GrInstagram size={25}/>
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default UtilNav
