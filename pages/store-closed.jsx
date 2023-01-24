import BlockContent from "@sanity/block-content-to-react"

import HeroComponent from 'components/molecules/Hero/Hero'
import sanityClient from 'lib/sanityClient'

const StorClosedPage = ({ content }) => {
  console.log(`%c content`, 'background: #0047ab; color: #fff; padding: 2px:', content)

  return (
    <>
      <HeroComponent {...content.pageHero} />
      <section className="pt-20 py-dynamic-container-y content-container text-center">
        <h2 className="font-display text-h1-dynamic capitalize">{content.heading}</h2>
        {/*  REFACTOR! */}
        <div className="content">
          <BlockContent blocks={content.body}/>
        </div>
        
      </section>
    </>
  )
}

export async function getStaticProps() {
  const contentProps = await sanityClient.fetch(`{
      "mySanityData": *[_type == "page" && pageTitle == "vacation"] {
        heading,
        body,
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
      content: contentProps.mySanityData[0]
    },
    revalidate: 120,
  }
}

export default StorClosedPage
