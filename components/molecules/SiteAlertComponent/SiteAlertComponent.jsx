import classNames from "classnames"
import { bannerData } from "Data/banners"
import { useEffect, useState } from "react"
import { AiOutlineCloseCircle } from 'react-icons/ai'

const SiteAlertComponent = () => {
  const [ bannerType, setBannerType ] = useState('')
  const [ bannerText, setBannerText ] = useState('')
  const [ bannerOpen, setBannerOpen ] = useState(bannerType !== 'visited')

  useEffect(() => {
    const setBanner = window.localStorage.getItem('hctd_banner')
    setBannerType(setBanner)
  }, [])

  useEffect(() => {
    bannerData.map(banner => {
      banner.id === bannerType && setBannerText(banner.text)
    })
  }, [bannerType])

  const handleCloseAlertBanner = () => {
    window.localStorage.setItem('hctd_banner', 'visited')
    window.localStorage.setItem('banner_closed', Date.now())
    setBannerOpen(false)
  }

  const BannerClasses = classNames({
    'fixed w-full min-h-max bg-emerald-300/90 bottom-0 px-4 pt-8 pb-4 lg:py-4 transition alert-banner tracking-wide backdrop-opacity-10': true,
    'hidden': bannerType === 'visited' || bannerText === '',
    'opacity-0': !bannerOpen
  })

  return (
    <div className={BannerClasses}>
      <div aria-live="polite" className="font-medium text-center w-5/6 md:w-full" dangerouslySetInnerHTML={{ __html: bannerText }} />
      <button onClick={() => handleCloseAlertBanner()} className="absolute right-2 lg:right-0 top-0 px-5 bg-blue-400 h-full w-auto">
        <AiOutlineCloseCircle size={30} fill={'purple'}/>
      </button>
    </div>
  )
}

export default SiteAlertComponent
