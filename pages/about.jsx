
import { NextSeo } from 'next-seo'
import HeroComponent from 'components/molecules/Hero/Hero'
import sanityClient from 'lib/sanityClient'
import { sanityAboutPageQuery } from 'queries/SanityQueries'
import SiteSeo from 'components/molecules/SiteSeo/SiteSeo'

const AboutPage = ({ content }) => (
  <div>
    <SiteSeo data={content.pageSeo}/>
    <HeroComponent {...content.pageHero}  />
    <section className="py-dynamic-container-y content-container">
      <h2 className="font-display text-h2-dynamic"> OH HAI</h2>
      <div className="about">
        <p className="text-lg leading-normal">
          Hi, I'm Amanda! I live in New Jersey, USA with my husband and 5 cats. I've always loved wearing tie dye and my love of doing tie dye was born at a friend's daughter's birthday party. I started out doing liquid and would regularly mix my own liquid shades. After I had been ice dyeing for a while I wondered what would happen if I mixed my own powder dyes and after a lot of experiments and testing the Happy Cat dye range was born!
        </p>
      </div>
    </section>
  </div >
)

export async function getStaticProps() {
  const contentProps = await sanityClient.fetch(sanityAboutPageQuery)
  return {
    props: {
      content: contentProps.mySanityData[0]
    },
    revalidate: 120,
  }
}


export default AboutPage
