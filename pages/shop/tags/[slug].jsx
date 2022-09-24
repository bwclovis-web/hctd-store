import { getAllCurrentTags, getAllItemsByTag } from "../../../lib/shopifyGraphql"
import { NextSeo } from "next-seo"
import DisplayGrid from "../../../components/molecules/DisplayGrid/DisplayGrid"
import HeroComponent from 'components/molecules/Hero/Hero'
const RelatedTagPage= ({ products, title }) => (
  <>
    <NextSeo
      title={`Shop | Tags | ${title}`}
    />
    <HeroComponent src="/images/tags.jpg" title={title} heading="Shopping All Things"/>
    <article className="container container-condensed p-dynamic-container-y min-h-screen">
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
