
import Accordion from "components/container/Accordion/Accordion"
import HeroComponent from "components/molecules/Hero/Hero"
import sanityClient from 'lib/sanityClient'
import { dyingNeeds } from "Data/need"
import { NextSeo } from "next-seo"
import data from 'Data/dyeInstructions.json'
const InstructionPage = ({ content }) => <>
  <NextSeo
    title="Home Page"
    description="Custom made tie dye clothing, accessories, and dyes."
  />
  <HeroComponent {...content.pageHero}/>
  <article className="flex py-dynamic-container-y content-container gap-10 flex-col lg:flex-row justify-between">
    <section className="lg:w-2/5 bg-violet-500/30 p-6 rounded border-2 border-violet-500 self-start">
      <h2 className="font-display text-h3-dynamic leading-none mb-4">What You will need:</h2>
      <ul className="list-disc list-inside text-xl">
        {dyingNeeds.map((item, idx) => (
          <li key={idx} className="pb-3">{item}</li>
        ))}
      </ul>
    </section>
    <section className="lg:w-3/5">
      <h2 className="font-display text-h3-dynamic leading-none mb-4">Basic Instructions</h2>
      <Accordion data={data}/>
    </section>
  </article>
</>

export async function getStaticProps() {
  const contentProps = await sanityClient.fetch(`{
    "mySanityData": *[_type == "page" && pageTitle == "instructions"] {
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

export default InstructionPage
