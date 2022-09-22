import { NextSeo } from 'next-seo'
import { getShopPageProps } from 'lib/shopifyGraphql'

import DisplayGrid from 'components/molecules/DisplayGrid/DisplayGrid'
import HeroComponent from 'components/molecules/Hero/Hero'

const ShopPage = ({ dyes, tops, bottoms, outerwear, accessories }) => (
  <>
    <NextSeo
      title="Current Shop Items"
      description="Custom tye die clothing and dyes for sale."
    />
    <HeroComponent src="/images/swirl.jpg" title="The Store" heading="Clothing and Dyes"/>
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
  return {
    props: {
      dyes: pageProps.dyeProducts.edges,
      tops: pageProps.tops.edges,
      bottoms: pageProps.bottoms.edges,
      outerwear: pageProps.outerwear.edges,
      accessories: pageProps.accessories.edges
    },
    revalidate: 120
  }
}


export default ShopPage
