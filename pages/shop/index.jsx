import { NextSeo } from 'next-seo';
import { getShopPageProps } from '../../lib/shopifyGraphql';
import DisplayGrid from '../../components/molecules/DisplayGrid/DisplayGrid';

const ShopPage = ({ dyes, tops, bottoms, outerwear, accessories }) => {
  return (
    <>
      <NextSeo
        title="Current Shop Items"
        description="Custom tye die clothing and dyes for sale."
      />
      <section className="container flex flex-col lg:gap-7">
        <DisplayGrid data={dyes} cat="dyes" cols={4} title="new dyes"/>
        <DisplayGrid data={tops} cat="tops" cols={4} title="new tops"/>
        <DisplayGrid data={bottoms} cat="bottoms" cols={4} title="new bottoms"/>
        <DisplayGrid data={outerwear} cat="outerwear" cols={4} title="new outerwear"/>
        <DisplayGrid data={accessories} cat="accessories"  cols={4} title="new accessories"/>
      </section>
    </>
  )
}

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
