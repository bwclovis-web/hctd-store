import { useState } from 'react'
import { NextSeo } from 'next-seo'
import Link from 'next/link'

import VendingCalendarComponent from '../components/container/VendingCalender/VendingCalender'
import DyeShopBanner from '../components/container/DyeShopBanner/DyeShopBanner'
import HeroComponent from '../components/molecules/Hero/Hero'
import DisplayGrid from '../components/molecules/DisplayGrid/DisplayGrid'

import { getHomePageProps } from '../lib/shopifyGraphql'


const HomePage = ({ products, collections }) => {
  const [firstProduct] = useState({
    title: products[0].node.title,
    category: products[0].node.collections.edges[0].node.handle,
    slug: products[0].node.handle
  })


  return (
    <>
      <NextSeo
        title="Home Page"
        description='Custom made tie dye clothing, accessories, and dyes.'
      />
      <HeroComponent src={`/images/rainbow.jpg`} title={'home'} />
      <section>
        <div className="container py-dynamic-container-y">
          <DisplayGrid data={collections} cols={5} type='cat' />
        </div>
      </section>
      <DyeShopBanner />
      
      <section className='container py-4 text-2xl tracking-wider text-center'>
        <p>Hey we just added
          <Link href={`shop/${firstProduct.slug}`}>
            <a className='px-1 bg-blue-600 rounded text-slate-100 mx-1 font-black'>{firstProduct.title}</a>
          </Link>
          to the store under {firstProduct.category}!</p>
      </section>
      <section style={{ backgroundColor: "rgb(82, 204, 186)" }}>
        <div className="container py-dynamic-container-y">
          <h2 className='font-display text-h2-dynamic'>New to the shop</h2>
          <DisplayGrid data={products} cols={4} />
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
    },
    revalidate: 60
  }
}

export default HomePage
