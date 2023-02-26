import { useContext } from "react"
import { GiHamburgerMenu } from 'react-icons/gi'
import Link from 'next/link'
import classNames from 'classnames'
import { navData } from 'Data/nav'
import AppContext from "provider/AppProvider"
import Button from "components/atoms/Button/Button"
import { getScreenSize } from "utils/getScreenSize"

const MainNavigation = () => {
  const { toggleNav, navOpen } = useContext(AppContext)

  const NavClasses = classNames({
    'fixed lg:relative backdrop-blur-lg top-0 left-0 h-full w-full lg:w-auto bg-violet-600/80 lg:bg-transparent z-[200] flex flex-col lg:flex-row pt-10 lg:pt-0 lg:justify-between lg:my-1 lg:mt-0 translate-x-full lg:translate-x-0 transition lg:transition-none': true, 
    'translate-x-0': navOpen
  })

  const handleNavClick = () => {
    getScreenSize() === "small" && toggleNav()
  }

  return(
    <div className="container">
      <div className="flex justify-center items-center lg:justify-between py-2 flex-col lg:flex-row">
        <div className="flex justify-between w-full lg:w-auto items-center">
          <Link href="/" className="text-h3-dynamic font-display">
          Happy Cat Tie Dye
          </Link>
          <button id="hctd-nav" className="lg:hidden" onClick={() => toggleNav()} type="button">
            <GiHamburgerMenu size={30}/>
          </button>
        </div>

        <nav className={NavClasses} id="main-navigation">
          <div className="flex justify-between px-5 lg:hidden mb-6 items-center">
            <span className="font-display text-slate-100 text-4xl tracking-wide">Happy Cat Tie Dye</span>
            <span className="bg-blue-800 text-white rounded-full w-8 h-8 flex justify-center items-center right-4 top-4 ">
              <Button id="nav-close" onClick={() => toggleNav()} config="svg" aria-label="close navigation">x</Button>
            </span>
          </div>
          <ul className="flex flex-col lg:flex-row">
            {
              navData.map(item => (
                <li key={item.id} className="pl-8 lg:pl-0 my-4 lg:my-0 pr-4 last:pr-0 " onClick={() => handleNavClick()}>
                  <Link href={item.src} className="uppercase p-4 lg:p-0 text-base font-medium tracking-wider bg-violet-800/40 lg:bg-transparent text-slate-50 lg:text-inherit rounded-md">
                    {item.title}
                  </Link>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
    </div>
  ) }

export default MainNavigation
