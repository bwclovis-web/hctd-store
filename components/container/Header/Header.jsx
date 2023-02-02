import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { getClient } from "lib/sanity"
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
    const today = new Date().toISOString()
    const startDate = new Date(banner[0].startDate).toISOString()
    const endDate = new Date(banner[0].endDate).toISOString()

    console.log(`%c startDate`, 'background: #0047ab; color: #fff; padding: 2px:', endDate > today)

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
      <div className="text-center p-4 bg-cyan-200">
        <div className="container">
          <p className="text-cyan-900 font-semibold text-sm lg:text-base" >During sales and new product launches processing can take up to two weeks. Dyes are small batch and filled to order.</p>
        </div>
      </div>
      {displayBanner.show ? <SiteAlert bannerData={displayBanner}/> : null}
      <header className="container py-0 outline-none" ref={headerRef} tabIndex={-1}>
        <UtilNav />
        <MainNavigation />
      </header>
    </>
  ) }

export default Header
