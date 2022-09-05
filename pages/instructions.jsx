
import Accordion from "components/container/Accordion/Accordion"
import HeroComponent from "components/molecules/Hero/Hero"
import { dyingNeeds } from "Data/need"
import { NextSeo } from "next-seo"
import data from 'Data/dyeInstructions.json'
const InstructionPage = () => <>
  <NextSeo
    title="Home Page"
    description="Custom made tie dye clothing, accessories, and dyes."
  />
  <HeroComponent src="/images/rainbow.jpg" title="home" />
  <article className="content-container flex flex-col lg:flex-row  justify-between py-dynamic-container-y gap-20">
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

export default InstructionPage
