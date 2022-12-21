import { useState } from 'react'
import Link from 'next/link'
import { getHomePageProps } from 'lib/shopifyGraphql'
import data from 'Data/seo.json'


import VendingCalendarComponent from 'components/container/VendingCalender/VendingCalender'
import DyeShopBanner from 'components/container/DyeShopBanner/DyeShopBanner'
import HeroComponent from 'components/molecules/Hero/Hero'
import DisplayGrid from 'components/molecules/DisplayGrid/DisplayGrid'
import SiteSeo from 'components/molecules/SiteSeo/SiteSeo'
import sanityClient from 'lib/sanityClient'

const HomePage = ({ products, collections, seo, content }) => {
  const [firstProduct] = useState({
    title: products[0].node.title,
    category: products[0].node.collections.edges[0].node.handle,
    slug: products[0].node.handle,
  })

  return <>
    <SiteSeo data={seo} />
    <HeroComponent {...content.pageHero} />
    <section>
      <div className="container py-dynamic-container-y">
        <DisplayGrid data={collections} cols={5} type="cat" filter={''}/>
      </div>
    </section>

    <DyeShopBanner />

    <section className="container py-6 italic text-2xl tracking-wider text-center">
      <p className="text-xl font-semibold">
        Hey we just added
        <Link
          href={`shop/${firstProduct.slug}`}
          className="p-1 bg-blue-600 not-italic rounded text-slate-100 mx-1 font-black">

          {firstProduct.title}

        </Link>
        to the store under {firstProduct.category}!
      </p>
    </section>

    <section className="bg-teal-200">
      <div className="container py-dynamic-container-y">
        <DisplayGrid data={products} cols={4} title="New to the shop" filter={''}/>
      </div>
    </section>

    {/* <VendingCalendarComponent /> */}
  </>
}

export async function getStaticProps() {
  const pageProps = await getHomePageProps()
  const contentProps = await sanityClient.fetch(`*[_type == "page" && pageTitle == "home"]`)
  return {
    props: {
      products: pageProps.products.edges,
      collections: pageProps.collections.edges,
      seo: data.home,
      content: contentProps[0]
    },
    revalidate: 120,
  }
}

export default HomePage
