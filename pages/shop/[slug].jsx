import { NextSeo } from 'next-seo';
import Image from "next/image"
import Link from 'next/link';
import { useState, useContext } from "react";
import Accordion from '../../components/container/Accordion/Accordion';
import AddToCart from '../../components/container/AddToCart/AddToCart';
import ProductThumbnails from '../../components/container/ThumbnailSwap/ThumbnailSwap';
import Toast from '../../components/molecules/Toast/Toast';
import careData from '../../Data/care.json';
import dyeData from '../../Data/dyeCare.json'
import { getSingleProductPageProps, getAllProductsQuery, getAllCurrentTags } from '../../lib/shopifyGraphql'
import AppCtx from '../../provider/AppProvider'

const SingleProductPage = ({ product }) => {
    const { toast } = useContext(AppCtx)
    const { featuredImage, tags, title, descriptionHtml, availableForSale, variants, collections, images } = product
    const [imageUrl, setImageUrl] = useState(featuredImage.url)
    const variant = variants.edges
    const collection = collections.edges[0].node
    const thumbnailArray = images.edges
    const data = collection.handle === 'dyes' ? dyeData : careData

    return (
        <div>
            <NextSeo
                title={`Shop | ${title}`}
            />
            <article className="content-container mt-10 flex flex-col gap-6 lg:flex-row justify-around border-fuchsia-100 border-2 py-20 rounded-md lg:w-5/6">
                <section className='w-1/2 mr-8'>
                    <div>
                        <Image
                            src={imageUrl}
                            alt=""
                            layout='responsive'
                            width={500}
                            height={600}
                        />
                        {thumbnailArray.length && <ProductThumbnails thumbnails={thumbnailArray} action={setImageUrl} />}
                    </div>
                </section>
                <section className='lg:w-3/5'>
                    <h1 className='text-h3-dynamic font-display mb-2'>{title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: descriptionHtml }} className="mb-6 text-lg" />
                    <AddToCart
                        variant={variant}
                        availableForSale={availableForSale}
                        collection={collection.handle}
                    />
                    <Accordion data={data} />

                    {/* {tags.length && <TagList tags={tags} />} */}
                </section>
            </article>
            <section>
                <div className="container">
                    <h2>
                        <Link href={`/shop/category/${collection.handle}`}>
                            <a>{`Other items in ${collection.title}`}</a>
                        </Link>
                    </h2>
                    {/* <DataGrid data={collection.products.edges} /> */}
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