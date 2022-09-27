import { useState } from 'react'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { getHomePageProps } from 'lib/shopifyGraphql'
import seoData  from 'data/seo.json'

import VendingCalendarComponent from 'components/container/VendingCalender/VendingCalender'
import DyeShopBanner from 'components/container/DyeShopBanner/DyeShopBanner'
import HeroComponent from 'components/molecules/Hero/Hero'
import DisplayGrid from 'components/molecules/DisplayGrid/DisplayGrid'
import SiteSeo from 'components/molecules/SiteSeo/SiteSeo'

const HomePage = ({ products, collections, seo }) => {
  const [firstProduct] = useState({
    title: products[0].node.title,
    category: products[0].node.collections.edges[0].node.handle,
    slug: products[0].node.handle,
  })

  return (
    <>
      <SiteSeo data={seo} />
      <HeroComponent src="/images/rainbow.jpg" title="Welcome Home" heading="Clothing & Supplies" />
      <section>
        <div className="container py-dynamic-container-y">
          <DisplayGrid data={collections} cols={5} type="cat" filter={''}/>
        </div>
      </section>

      <DyeShopBanner />

      <section className="container py-6 italic text-2xl tracking-wider text-center">
        <p className="text-xl font-semibold">
          Hey we just added
          <Link href={`shop/${firstProduct.slug}`}>
            <a className="p-1 bg-blue-600 not-italic rounded text-slate-100 mx-1 font-black">
              {firstProduct.title}
            </a>
          </Link>
          to the store under {firstProduct.category}!
        </p>
      </section>

      <section className="bg-teal-200">
        <div className="container py-dynamic-container-y">
          <DisplayGrid data={products} cols={4} title="New to the shop" filter={''}/>
        </div>
      </section>

      <VendingCalendarComponent />
    </>
  )
}

export async function getStaticProps() {
  const pageProps = await getHomePageProps()
  return {
    props: {
      products: pageProps.products.edges,
      collections: pageProps.collections.edges,
      seo: seoData.home
    },
    revalidate: 120,
  }
}

export default HomePage
