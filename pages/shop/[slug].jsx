import { useState, useContext, useEffect } from "react"
import Image from "next/image"
import Link from 'next/link'
import careData from '../../Data/care.json';
import dyeData from '../../Data/dyeCare.json'

import { NextSeo } from 'next-seo';
import Accordion from '../../components/container/Accordion/Accordion';
import AddToCart from '../../components/container/AddToCart/AddToCart';
import ProductThumbnails from '../../components/container/ThumbnailSwap/ThumbnailSwap';
import Toast from '../../components/molecules/Toast/Toast';

import { getSingleProductPageProps, getAllProductsQuery, getAllCurrentTags } from '../../lib/shopifyGraphql'
import AppCtx from '../../provider/AppProvider'
import TagList from "../../components/molecules/TagList/TagList";
import DisplayGrid from "../../components/molecules/DisplayGrid/DisplayGrid";

const SingleProductPage = ({ product }) => {
    const { toast } = useContext(AppCtx)
    const { featuredImage, tags, title, descriptionHtml, availableForSale, variants, collections, images } = product
    const [image, setImage] = useState({url:featuredImage.url, alt:featuredImage.altText })
    const variant = variants.edges
    const collection = collections.edges[0].node
    const thumbnailArray = images.edges
    const data = collection.handle === 'dyes' ? dyeData : careData

    useEffect(() => {
        setImage({
            url:featuredImage.url, alt:featuredImage.altText
        })
    },[featuredImage])

    return (
        <div>
            <NextSeo
                title={`Shop | ${title}`}
            />
            <article className="content-container mt-10 flex flex-col gap-6 lg:flex-row justify-around border-fuchsia-100 border-2 py-20 rounded-md lg:w-5/6">
                <section className='w-1/2 mr-8'>
                    <div>
                        <Image
                            src={image.url}
                            alt={image.alt}
                            layout='responsive'
                            width={500}
                            height={600}
                        />
                        <p className="text-base text-center py-2">Displaying {image.alt}</p>
                        {thumbnailArray.length && <ProductThumbnails thumbnails={thumbnailArray} action={setImage} />}
                    </div>
                </section>
                <section className='lg:w-3/5'>
                    <h1 className='text-h2-dynamic font-display leading-tight mb-2'>{title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: descriptionHtml }} className="text-lg" />
                    <AddToCart
                        variant={variant}
                        availableForSale={availableForSale}
                        collection={collection.handle}
                    />
                    {tags.length ? <TagList tags={tags} /> : null}
                    <div className="border-t border-blue-400 mt-12 pt-3"><Accordion data={data} /></div>
                </section>
            </article>
            <section className="bg-violet-400/30 pb-10 pt-5 mt-12">
                <div className="container">
                    <h2 className="text-h3-dynamic font-display mb-2">
                        <Link href={`/shop/category/${collection.handle}`}>
                            <a className="underline">{`Other items in ${collection.title}`}</a>
                        </Link>
                    </h2>
                    <DisplayGrid data={collection.products.edges} cols={4}/>
                </div>
            </section>
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
    const paths = allProducts.map((item) => ({
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