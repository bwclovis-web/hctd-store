import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { getClient } from "../../../lib/sanity"
import MainNavigation from 'components/molecules/Navigation/MainNavigation'
import UtilNav from 'components/molecules/UtilityNav/UtilityNav'
import { groq } from 'next-sanity'
import SiteAlert from './SiteAlert'

const query = groq`
  *[_type == "sitebanner"] {
    content,
    startDate,
    endDate,
    bannerDisplay,
    bannerColor
  }
`
const Header = () => {
  const [ displayBanner, setDisplayBanner ] = useState({
    show: false
  })
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

  useEffect(() => {
    testAThing()
  }, [])


  const testAThing = async() => {
    const banner = await getClient().fetch(query)
    const today = new Date().toLocaleDateString()
    const startDate = new Date(banner[0].startDate).toLocaleDateString()
    const endDate = new Date(banner[0].endDate).toLocaleDateString()

    if(startDate < today && endDate > today && banner[0].bannerDisplay) {
      setDisplayBanner({
        show: true,
        content: banner[0].content,
        color: banner[0].bannerColor
      })
    }
  }

  return(
    <>
      {displayBanner.show ? <SiteAlert bannerData={displayBanner}/> : null}
      <header className="container py-0 outline-none" ref={headerRef} tabIndex={-1}>
        <>
          <UtilNav />
          <MainNavigation />
        </>
      </header>
    </>
  ) }

export default Header
