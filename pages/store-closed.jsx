import BlockContent from "@sanity/block-content-to-react"

import HeroComponent from 'components/molecules/Hero/Hero'
import sanityClient from 'lib/sanityClient'

const StorClosedPage = ({ content }) => (
  <>
    <HeroComponent {...content.pageHero} />
    <section className="pt-20 py-dynamic-container-y content-container text-center">
      <h2 className="font-display text-h1-dynamic capitalize mb-10">{content.heading}</h2>
      {/*  REFACTOR! */}
      <div className="content">
        <BlockContent blocks={content.body}/>
      </div>
      <div className="mt-6 border-t-2">
        <p className="text-slate-600 pt-4 text-lg">If you have an account with an email, you will be notified when store re-opens.</p>
        <a href={`https://bwclovis.myshopify.com/account/register`} className="px-1 mt-4 block py-2 border-2 text-xl uppercase shadow font-semibold tracking-wider text-center w-full md:w-1/3 mx-auto border-fuchsia-800 bg-fuchsia-200 text-fuchsia-800 hover:bg-fuchsia-800 hover:text-fuchsia-200 hover:border-fuchsia-300 hover:transition-all hover:shadow-md">Create Account</a>
      </div>
    </section>
  </>
)

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
