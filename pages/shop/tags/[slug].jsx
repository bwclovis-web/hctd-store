import { getAllCurrentTags, getAllItemsByTag } from "../../../lib/shopifyGraphql"
import sanityClient from 'lib/sanityClient'

import { NextSeo } from "next-seo"
import DisplayGrid from "../../../components/molecules/DisplayGrid/DisplayGrid"
import HeroComponent from 'components/molecules/Hero/Hero'
const RelatedTagPage= ({ products, title, content }) => (
  <>
    <NextSeo
      title={`Shop | Tags | ${title}`}
    />
    <HeroComponent heading={title} {...content.pageHero}/>
    <article className="container container-condensed p-dynamic-container-y min-h-screen">
      <DisplayGrid data={products} filter={''} cols={4}/>
    </article>
  </>
)

export const getStaticProps = async ({ params }) => {
  const allItemsByTag = await getAllItemsByTag(params.slug)
  const contentProps = await sanityClient.fetch(`*[_type == "page" && pageTitle == "tags"]`)
  return {
    props: {
      products: allItemsByTag,
      title: params.slug,
      content: contentProps[0]
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
