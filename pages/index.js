import { useState } from 'react'
import Link from 'next/link'

import { getHomePageProps } from 'lib/shopifyGraphql'
import sanityClient from 'lib/sanityClient'

import data from 'Data/seo.json'

// import VendingCalendarComponent from 'components/container/VendingCalender/VendingCalender'
import DyeShopBanner from 'components/container/DyeShopBanner/DyeShopBanner'
import HeroComponent from 'components/molecules/Hero/Hero'
import DisplayGrid from 'components/molecules/DisplayGrid/DisplayGrid'
import SiteSeo from 'components/molecules/SiteSeo/SiteSeo'


const HomePage = ({ products, collections, seo, content, featuredArtist }) => {
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
    <HeroComponent {...featuredArtist.pageHero} config="mini" pos="start" link={{ "href": '/featured-artist', "text": "featured artist sign-up" }}/>

    {/* <VendingCalendarComponent /> */}
  </>
}

export async function getStaticProps() {
  const pageProps = await getHomePageProps()
  const contentProps = await sanityClient.fetch(`{
    "pageContent": *[_type == "page" && pageTitle == "home"] {
      pageHero {
        heading,
        eyebrow,
        heroImage {
          asset -> {
            ...,
            metadata
          }
        }
      }
    },
    "featuredArtist": *[_type == "featuredArtist" && isFeatured == true]  {
      pageHero {
        heading,
        eyebrow,
        heroImage {
          asset -> {
            ...,
            metadata
          }
        }
      }
    }
  }`)
  return {
    props: {
      products: pageProps.products.edges,
      collections: pageProps.collections.edges,
      seo: data.home,
      featuredArtist: contentProps.featuredArtist[0],
      content: contentProps.pageContent[0]
    },
    revalidate: 120,
  }
}

export default HomePage
