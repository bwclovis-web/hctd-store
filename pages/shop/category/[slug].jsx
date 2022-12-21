import { NextSeo } from 'next-seo'
import Link from 'next/link'

import { getAllCollectionsQuery, getProductByCollection } from 'lib/shopifyGraphql'
import sanityClient from 'lib/sanityClient'

import DisplayGrid from 'components/molecules/DisplayGrid/DisplayGrid'
import { getAllTags } from 'components/molecules/DisplayGrid/utility'
import { useState } from 'react'
import Dropdown from 'components/atoms/Dropdown/Dropdown'
import HeroComponent from 'components/molecules/Hero/Hero'

const CategoryProducts = ({ collection, content }) => {
  const [ filter, setFilter ] = useState('')
  const allTags = getAllTags(collection.products.edges)

  const handleFilterChange = evt => {
    setFilter(evt.target.value)
  }

  return (
    <>
      <NextSeo
        title={`Shop | Category | ${collection.title}}`}
      />
      <HeroComponent {...content.pageHero} heading={collection.title} />
      <article className="container p-dynamic-container-y">
        <div className="flex justify-between items-center">
          {collection.title.toLowerCase() === 'dyes' && allTags &&
          <Dropdown data={allTags} onChange={handleFilterChange} heading="Filter By Color"/>
          }
        </div>
        {collection.products.edges.length ?
          <DisplayGrid data={collection.products.edges} cols={4} filter={filter} /> :
          <div className="pt-10">
            <h2 className="text-4xl pb-4">Ooops, looks like we're out of stock!</h2>
            <p className="text-lg">Please check back later, or if you are looking for something special or custom, <Link href="/contact" className="default-anchor">feel free to send us a message</Link>.</p>
          </div>
        }
      </article>
    </>
  )
}

export const getStaticProps = async ({ params }) => {
  const productsByCollection = await getProductByCollection(params.slug)
  const contentProps = await sanityClient.fetch(`{
    "mySanityData": *[_type == "page" && pageTitle == "category"] {
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
      collection: JSON.parse(JSON.stringify(productsByCollection)),
      content: contentProps.mySanityData[0]
    },
    revalidate: 120
  }
}

export const getStaticPaths = async () => {
  const allCollections = await getAllCollectionsQuery()
  const paths = allCollections.map(item => ({
    params: {
      slug: item.node.handle
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export default CategoryProducts
