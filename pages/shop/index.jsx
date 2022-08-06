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
        <DisplayGrid data={dyes} cols={4} title="new dyes"/>
        <DisplayGrid data={tops} cols={4} title="new tops"/>
        <DisplayGrid data={bottoms} cols={4} title="new bottoms"/>
        <DisplayGrid data={outerwear}  cols={4} title="new outerwear"/>
        <DisplayGrid data={accessories} cols={4} title="new accessories"/>
      </section>
      <div>
        <section className="container" >
          <h2 className="center">Or shop by category</h2>
          {/* <LinkList data={collections}/> */}
        </section>
      </div>
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
