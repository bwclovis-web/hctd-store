import { IBM_Plex_Sans, Chicle } from "next/font/google"

const plexSans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: [ "400", "500", "600", "700" ],
  display: "swap",
})

const chicle = Chicle({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
})
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
  const fontVars = `${plexSans.variable} ${chicle.variable} font-main antialiased overflow-x-hidden`
  if(appProps.router.pathname === '/coming-soon') {
    return(
      <>
        <DefaultSeo {...SEO} />
        <main id="main" className={fontVars}>
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
          <main id="main" className={`min-h-full ${fontVars}`}>
            <Component {...pageProps} />
          </main>
          <Footer />
        </CartProvider>
      </AppProvider>
    </>
  )
}

export default MyApp
