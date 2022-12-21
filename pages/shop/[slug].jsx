/* eslint-disable no-console */
import { useState, useContext, useEffect } from "react"
import Image from "next/legacy/image"
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { RiHeartAddFill } from 'react-icons/ri'

import { getSingleProductPageProps, getAllProductsQuery } from 'lib/shopifyGraphql'
import { hctdFavorites } from 'queries/database.config'

import AppCtx from 'provider/AppProvider'
import AddToCart from 'components/container/AddToCart/AddToCart'
import ProductThumbnails from 'components/container/ThumbnailSwap/ThumbnailSwap'
import Toast from 'components/molecules/Toast/Toast'
import TagList from "components/molecules/TagList/TagList"
import DisplayGrid from "components/molecules/DisplayGrid/DisplayGrid"
import Button from "components/atoms/Button/Button"
import Modal from "components/container/Modal/Modal"
import DisclaimerContent from "components/molecules/ProductModalContent/DisclaimerContent"
import data from 'Data/care.json'
import Accordion from "components/container/Accordion/Accordion"


const SingleProductPage = ({ product }) => {
  const { toast, toggleModal, modalOpen, modalId } = useContext(AppCtx)
  const { featuredImage, tags, title, descriptionHtml, availableForSale, variants, collections, images } = product
  const [ image, setImage ] = useState({ url: featuredImage.url, alt: featuredImage.altText })
  const variant = variants.edges
  const collection = collections.edges[0].node
  const thumbnailArray = images.edges

  useEffect(() => {
    setImage({
      url: featuredImage.url, alt: featuredImage.altText
    })
  }, [featuredImage])

  const addToFavorite = async product => {
    const dbObject = {
      id: product.id,
      image: product.featuredImage.url,
      title: product.title,
      slug: window.location.pathname, 
      timeStamp: new Date().toDateString()
    }
   
    try {
      await hctdFavorites.add(dbObject)
    } catch (error) {
      console.log(`%c error`, 'background: #0047ab; color: #fff; padding: 2px:', error)
    }
  }

  return (
    <div>
      <NextSeo
        title={`Shop | ${title}`}
      />
      {modalOpen && modalId === "disclaimer" && <Modal>
        <DisclaimerContent />
      </Modal>}
      <article className="content-container mt-10 flex flex-col gap-6 lg:flex-row justify-around border-indigo-100 border-2 py-20 rounded-md lg:w-5/6 mb-5">
        <section className="lg:w-1/2 2xl:mr-8">
          <div>
            <Image
              src={image.url}
              alt={image.alt}
              layout="responsive"
              width={400}
              height={400}
              placeholder="blur"
              blurDataURL={`/_next/image?url=${image.url}&w=16&q=1`}
            />
            <p className="text-base text-center py-2 text-slate-600 capitalize italic">Displaying {image.alt}</p>
            {thumbnailArray.length > 1 && <ProductThumbnails thumbnails={thumbnailArray} action={setImage} />}
          </div>
        </section>
        <section className="md:w-4/5 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center">
              <h1 className="text-h2-dynamic font-display leading-tight">{title}</h1>
              <button onClick={() => addToFavorite(product)} className="active:translate-y-4 transition-transform" aria-label="add to favorites">
                <RiHeartAddFill size={50} fill={'red'}/>
              </button>
            </div>
            <div dangerouslySetInnerHTML={{ __html: descriptionHtml }} className="text-base mt-4" />
            <AddToCart
              variant={variant}
              availableForSale={availableForSale}
              collection={collection.handle}
            />
            {tags.length ? <TagList tags={tags} /> : null}
          </div>
          <div className="border-t border-indigo-400 mt-8 pt-4 flex flex-col justify-around min-h-max">
            {collection.handle ==='dyes' ? 
              <>
                <p>If you want to learn more on how to use these dyes, please visit our 
                  <Link href="/instructions" className="text-link">
                    tips and tricks page.
                  </Link>
                </p>
                <span className="mt-10 text-center">
                  <Button onClick={() => toggleModal('disclaimer')} config="link">
                    * Click here to read product disclaimer
                  </Button>
                </span>
              </> :
              <>
                <h2 className="text-lg tracking-wider uppercase mb-2 underline">How to care for Clothing:</h2>
                <p>Wash cold with like colors, tumble dry low.</p>
              </>
            }
          </div>
        </section>
      </article>
      {/* <section className="bg-indigo-400/30 pb-10 pt-5 mt-12">
        <div className="container">
          <h2 className="text-h3-dynamic font-display mb-4">
            <Link href={`/shop/category/${collection.handle}`}>
              <a className="underline">{`Other items in ${collection.title}`}</a>
            </Link>
          </h2>
          <DisplayGrid data={collection.products.edges} cols={4} filter={''}/>
        </div>
      </section> */}
      <Toast item={product} openToast={toast} />
    </div>
  )
}

export const getStaticProps = async ({ params }) => {
  const product = await getSingleProductPageProps(params.slug)
  return {
    props: {
      product,
    },
    revalidate: 120
  }
}

export const getStaticPaths = async () => {
  const allProducts = await getAllProductsQuery()
  const paths = allProducts.map(item => ({
    params: {
      slug: item.node.handle
    }
  }))
  return {
    paths,
    fallback: false
  }
}

export default SingleProductPage
