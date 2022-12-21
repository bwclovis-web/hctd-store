import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { getAllCollectionsQuery, getProductByCollection, getPaginatedCollection, getPaginatedCollectionBack } from 'lib/shopifyGraphql'

import DisplayGrid from 'components/molecules/DisplayGrid/DisplayGrid'
import { getAllTags } from 'components/molecules/DisplayGrid/utility'
import { useEffect, useState } from 'react'
import Dropdown from 'components/atoms/Dropdown/Dropdown'
import HeroComponent from 'components/molecules/Hero/Hero'
import Button from 'components/atoms/Button/Button'

const CategoryProducts = ({ collection }) => {
  const [ filter, setFilter ] = useState('')
  const [ collectionData, setCollectionData ] = useState({})
  const allTags = getAllTags(collection.products.edges)
  

  useEffect(() => {
    setCollectionData({
      collection: collection.products.edges,
      pageData: collection.products.pageInfo
    })
  }, [collection.products])

  const handleFilterChange = evt => {
    setFilter(evt.target.value)
  }

  const getNextProducts = async () => {
    getPaginatedCollection(collection.title, collectionData.pageData.endCursor).then(data => {
      setCollectionData({
        collection: data.products.edges,
        pageData: data.products.pageInfo
      })
    })
  }

  const getPrevProducts = async () => {
    getPaginatedCollectionBack(collection.title, collectionData.pageData.startCursor).then(data => {
      setCollectionData({
        collection: data.products.edges,
        pageData: data.products.pageInfo
      })
    })
  }

  if(!collectionData.collection) {
    return
  }
  return (
    <>
      <NextSeo
        title={`Shop | Category | ${collection.title}}`}
      />
      <HeroComponent src="/images/swirl.jpg" title={collection.title} heading="Shopping by category:"/>
      <article className="container p-dynamic-container-y">
        <div className="flex justify-between items-center">
          {collection.title.toLowerCase() === 'dyes' && allTags &&
          <Dropdown data={allTags} onChange={handleFilterChange} heading="Filter By Color"/>
          }
        </div>
        {collectionData.collection.length ?
          <DisplayGrid data={collectionData.collection} cols={4} filter={filter} /> :
          <div className="pt-10">
            <h2 className="text-4xl pb-4">Ooops, looks like we're out of stock!</h2>
            <p className="text-lg">Please check back later, or if you are looking for something special or custom, <Link href="/contact" className="default-anchor">feel free to send us a message</Link>.</p>
          </div>
        }
        {(collectionData.pageData.hasNextPage || collectionData.pageData.hasPreviousPage) && 
           <div className="flex flex-col md:flex-row md:w-1/2 mx-auto justify-around mt-20 gap-5">
             <Button type="button" config="default" size="large" disabled={!collectionData.pageData.hasNextPage} onClick={() => getNextProducts()}>{`see more ${collection.title}`}</Button>
             <Button type="button" config="default" size="large" disabled={!collectionData.pageData.hasPreviousPage} onClick={() => getPrevProducts()}>{`see previous ${collection.title}`}</Button>
           </div>
        }
       
      </article>
    </>
  )
}

export const getStaticProps = async ({ params }) => {
  const productsByCollection = await getProductByCollection(params.slug)
  return {
    props: {
      collection: JSON.parse(JSON.stringify(productsByCollection))
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
