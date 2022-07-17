import '../styles/globals.css'
import { DefaultSeo } from 'next-seo';
// import { CartProvider } from '../provider/AppProvider'
import Header from '../components/container/Header/Header'
import SEO from '../next-seo.config'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <>
        <Header />
        <main id="main">
          <Component {...pageProps} />
        </main>
      </>
    </>
  )
}

export default MyApp
