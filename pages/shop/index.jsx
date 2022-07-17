import { NextSeo } from 'next-seo';
import { getShopPageProps } from '../../lib/shopifyGraphql';
import DisplayGrid from '../../components/molecules/DisplayGrid/DisplayGrid';

const ShopPage = ({ products }) => {
  return (
    <>
      <NextSeo
        title="Current Shop Items"
        description="Custom tye die clothing and dyes for sale."
      />
      <section className="container flex flex-col lg:gap-7">
        <div>
          <h1 className='text-2xl pb-4'>Whats in the Shop</h1>
          <DisplayGrid data={products} cols={4} />
        </div>
        <div>
          <h2 className='text-2xl pb-4'>Whats in the Shop</h2>
          <DisplayGrid data={products} filter="tops" />
        </div>
        <div>
          <h2 className='text-2xl pb-4'>Whats in the Shop</h2>
          <DisplayGrid data={products} filter="dyes" />
        </div>

        <div>
          <h2 className='text-2xl pb-4'>Whats in the Shop</h2>
          <DisplayGrid data={products} filter="bottoms" />
        </div>

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
      products: pageProps.products.edges,
      collections: pageProps.collections.edges,
    },
    revalidate: 100
  }
}


export default ShopPage
