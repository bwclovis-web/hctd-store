import { useState, useContext, useEffect } from "react"
import Image from "next/image"
import Link from 'next/link'
import { NextSeo } from 'next-seo'

import { getSingleProductPageProps, getAllProductsQuery } from 'lib/shopifyGraphql'

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
  const { toast, toggleModal, modalOpen } = useContext(AppCtx)
  const { featuredImage, tags, title, descriptionHtml, availableForSale, variants, collections, images } = product
  const [ image, setImage ] = useState({ url: featuredImage.url, alt: featuredImage.altText })
  const variant = variants.edges
  const collection = collections.edges[0].node
  const thumbnailArray = images.edges

  console.log(`%c  variant`, 'background: #0047ab; color: #fff; padding: 2px:', variant )

  useEffect(() => {
    setImage({
      url: featuredImage.url, alt: featuredImage.altText
    })
  }, [featuredImage])

  return (
    <div>
      <NextSeo
        title={`Shop | ${title}`}
      />
      {modalOpen && <Modal>
        <DisclaimerContent />
      </Modal>}
      <article className="content-container mt-10 flex flex-col gap-6 lg:flex-row justify-around border-indigo-100 border-2 py-20 rounded-md lg:w-5/6">
        <section className="lg:w-1/2 lg:mr-8">
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
        <section className="lg:w-3/5 flex flex-col justify-between">
          <div>
            <h1 className="text-h2-dynamic font-display leading-tight mb-2">{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: descriptionHtml }} className="text-base" />
            <AddToCart
              variant={variant}
              availableForSale={availableForSale}
              collection={collection.handle}
            />
            {tags.length ? <TagList tags={tags} /> : null}
          </div>
          <div className="border-t border-indigo-400 mt-8 pt-3 flex flex-col justify-around min-h-max">
            {collection.handle ==='dyes' ? 
              <>
                <p>If you want to learn more on how to use these dyes, please visit our 
                  <Link href="/instructions">
                    <a className="text-link">tips and tricks page.</a>
                  </Link>
                </p>
                {title.toLowerCase() !== 'jars' && 
                  <p>
                    We ship dyes in mylar, if you want jars, please visit the <Link href="/shop/jars"><a className="text-link">jars page</a></Link> and add the appropriate sized jar(s) to your order.
                  </p>
                }
                <span className="mt-10 text-center">
                  <Button onClick={() => toggleModal()} config="link">
                    * Click here to read product disclaimer
                  </Button>
                </span>
              </> :
              <Accordion data={data}/>
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
      product
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
