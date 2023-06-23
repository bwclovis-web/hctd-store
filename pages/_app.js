import { useEffect } from 'react'
import { DefaultSeo } from 'next-seo'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import '../styles/globals.css'
import SEO from '../next-seo.config'

import { CartProvider } from 'provider/ShopProvider'
import { AppProvider } from 'provider/AppProvider'

import Header from 'components/container/Header/Header'
import Footer from 'components/container/Footer/Footer'


function MyApp({ Component, pageProps, ...appProps }) {
  useEffect(() => {
    const setBanner = window.localStorage.getItem('hctd_banner')
    const bannerClosedTime = window.localStorage.getItem('banner_closed')

    if(setBanner) {
      window.localStorage.removeItem('hctd_banner')
    }

    if(bannerClosedTime) {
      window.localStorage.removeItem('banner_closed')
    }
  }, [])
  if(appProps.router.pathname === '/coming-soon') {
    return(
      <>
        <DefaultSeo {...SEO} />
        <main id="main">
          <Component {...pageProps} />
        </main>
      </>
    )
  }
  return (
    <>
      <DefaultSeo {...SEO} />
      <AppProvider>
        <CartProvider>
          <Header />
          <main id="main" className="min-h-full">
            <Component {...pageProps} />
          </main>
          <Footer />
        </CartProvider>
      </AppProvider>
    </>
  )
}

export default MyApp
