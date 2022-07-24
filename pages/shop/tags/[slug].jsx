import { getAllCurrentTags, getAllItemsByTag } from "../../../lib/shopifyGraphql"
import { NextSeo } from "next-seo"
import { useEffect } from "react"
import DisplayGrid from "../../../components/molecules/DisplayGrid/DisplayGrid"

const RelatedTagPage= ({ products, title }) => {
    return (
        <>
            <NextSeo
                title={`Shop | Tags | ${title}`}
            />
            <article className="container container-condensed">
                <h1>All things {title}</h1>
                <DisplayGrid data={products} />
            </article>
        </>
    )
}

export const getStaticProps = async ({ params }) => {
    const allItemsByTag = await getAllItemsByTag(params.slug)
    return {
        props: {
            products: allItemsByTag,
            title: params.slug
        },
        revalidate: 120
    }
}

export const getStaticPaths = async () => {
    const allCollections = await getAllCurrentTags()
    const paths = allCollections.map((item) => ({
        params: {
            slug: item
        }
    }))

    return {
        paths,
        fallback: false
    }
}


export default RelatedTagPage