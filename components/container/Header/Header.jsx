import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

import MainNavigation from 'components/molecules/Navigation/MainNavigation'
import UtilNav from 'components/molecules/UtilityNav/UtilityNav'

const Header = () => {
  const headerRef = useRef()
  const router = useRouter()
  const resetFocus = () => {
    headerRef.current.focus()
  }
  useEffect(() => {
    router.events.on('routeChangeComplete', resetFocus)
    return () => {
      router.events.off('routeChangeComplete', resetFocus)
    }
  }, [router])
  return(
    <>
      {/* <div className="text-center bg-red-500 px-2 py-5 text-xl text-slate-50">
        <p><span className="font-semibold">NOTICE: 11/13/2022</span> due to illness, there will be an approximate 5 day delay in order fulfillment. We apologize for any inconveniences.</p>
      </div> */}
      <header className="container py-0 outline-none" ref={headerRef} tabIndex={-1}>
        
        <>
          <UtilNav />
          <MainNavigation />
        </>
      </header>
    </>
  ) }

export default Header
