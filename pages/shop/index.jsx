import { getShopPageProps } from 'lib/shopifyGraphql'
import sanityClient from 'lib/sanityClient'

import DisplayGrid from 'components/molecules/DisplayGrid/DisplayGrid'
import HeroComponent from 'components/molecules/Hero/Hero'
import SiteSeo from 'components/molecules/SiteSeo/SiteSeo'

import { sanityShopPageQuery } from 'queries/SanityQueries'

const ShopPage = ({ dyes, tops, bottoms, outerwear, accessories, content }) => (
  <>
    <SiteSeo data={content.pageSeo} />
    <HeroComponent {...content.pageHero}/>
    <section>
      <div className="container py-dynamic-container-y">
        <DisplayGrid data={dyes} cat="dyes" cols={4} title="new dyes" filter={''}/>
        <DisplayGrid data={tops} cat="tops" cols={4} title="new tops" filter={''}/>
        <DisplayGrid data={bottoms} cat="bottoms" cols={4} title="new bottoms" filter={''}/>
        <DisplayGrid data={outerwear} cat="outerwear" cols={4} title="new outerwear" filter={''}/>
        <DisplayGrid data={accessories} cat="accessories"  cols={4} title="new accessories" filter={''}/>
      </div>
    </section>
  </>
)

export async function getStaticProps() {
  const pageProps = await getShopPageProps()
  const contentProps = await sanityClient.fetch(sanityShopPageQuery)
  return {
    props: {
      dyes: pageProps.dyeProducts.edges,
      tops: pageProps.tops.edges,
      bottoms: pageProps.bottoms.edges,
      outerwear: pageProps.outerwear.edges,
      accessories: pageProps.accessories.edges,
      content: contentProps.mySanityData[0]
    },
    revalidate: 120
  }
}


export default ShopPage
