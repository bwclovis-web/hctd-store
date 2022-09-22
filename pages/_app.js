import '../styles/globals.css'
import SEO from '../next-seo.config'
import { DefaultSeo } from 'next-seo'

import { CartProvider } from 'provider/ShopProvider'
import { AppProvider } from 'provider/AppProvider'

import Header from 'components/container/Header/Header'
import Footer from 'components/container/Footer/Footer'

function MyApp({ Component, pageProps, ...appProps }) {
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
