import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

import MainNavigation from 'components/molecules/Navigation/MainNavigation'
import UtilNav from 'components/molecules/UtilityNav/UtilityNav'
import Modal from '../Modal/Modal'

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
    <header className="container py-0 outline-none" ref={headerRef} tabIndex={-1}>
      <>
        <UtilNav />
        <MainNavigation />
      </>
    </header>
  ) }

export default Header
