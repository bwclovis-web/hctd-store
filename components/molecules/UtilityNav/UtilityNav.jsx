import { GrFacebook, GrInstagram } from 'react-icons/gr'
import CustomerProfileButton from '../CustomerProfileButton/CustomerProfileButton'

import ShoppingCartButton from "../ShoppingCartButton/ShoppingCartButton"

import dynamic from 'next/dynamic'

const FavoritesComponent = dynamic(() => import('../FavoritesComponent/FavoritesComponent'), { ssr: false })

const UtilNav = () => (
  <div className="flex justify-between border-b-2 border-indigo-100 items-center py-1 px-2">
    <a href="#main" className="bg-indigo-100 p-2 opacity-0 focus:opacity-100 text-lg">skip to main</a>
    <div className="flex justify-center items-center">
      <FavoritesComponent />
      <CustomerProfileButton/>
      <ShoppingCartButton />
      <ul className="border-l-2 ml-5 border-indigo-100 pl-5 flex gap-3">
        <li>
          <a href="https://www.facebook.com/groups/1259074817923302">
            <span className="sr-only">Happy cat tie dye facebook group</span>
            <GrFacebook size={25} fill="black"/>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/happy_cat_tie_dye/">
            <span className="sr-only">Happy cat tie dye instagram</span>
            <GrInstagram size={25}/>
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default UtilNav
