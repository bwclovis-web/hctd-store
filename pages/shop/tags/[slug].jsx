import { getAllCurrentTags, getAllItemsByTag } from "../../../lib/shopifyGraphql"
import { NextSeo } from "next-seo"
import DisplayGrid from "../../../components/molecules/DisplayGrid/DisplayGrid"

const RelatedTagPage= ({ products, title }) => (
  <>
    <NextSeo
      title={`Shop | Tags | ${title}`}
    />
    <article className="container container-condensed min-h-screen">
      <h1 className="text-h2-dynamic font-display capitalize">All things {title}</h1>
      <DisplayGrid data={products} filter={''} cols={4}/>
    </article>
  </>
)

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
  const paths = allCollections.map(item => ({
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
