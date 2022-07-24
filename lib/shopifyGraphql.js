import { singleProductPageQuery, homePageQuery, allProductsQuery,shopPageQuery, getFullAllCollections, allCollectionsQuery, productByCollection } from "../queries/Queries";

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_URL
const storefrontAccessToken = process.env.NEXT_PUBLIC_STOREFRONT_ACCESS_TOKEN

const callShopify =  async(query) => {
    const fetchUrl = `https://${domain}/api/2022-01/graphql.json`;
    const fetchOptions = {
      endpoint: fetchUrl,
      method: "POST",
      headers: {
        "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
        "Content-Type": "application/graphql",
      },
      body: query,
    };
  
    try {
      const data = await fetch(fetchUrl, fetchOptions).then((response) =>
        response.json(),
      );
      return data;
    } catch (error) {
      throw new Error("Could not fetch products!");
    }
  }

export const getHomePageProps = async () => {
  const query = homePageQuery
  const response = await callShopify(query)
  const allProducts = response ? response.data : '';
  return allProducts
}

export const getShopPageProps = async () => {
  const query = shopPageQuery
  const response = await callShopify(query)
  const allProducts = response ? response.data : '';
  return allProducts
}

export const getSingleProductPageProps = async (handle) => {
  const query = singleProductPageQuery(handle)
  const response = await callShopify(query);
  const pageData = response.data && response.data.product
  return pageData
}

export const getAllProductsQuery = async () => {
  const query = allProductsQuery
  const response = await callShopify(query);
  const allProducts = response.data.products && response.data.products.edges

  return allProducts
}

export const getAllCollectionsQuery = async () => {
  const query = allCollectionsQuery
  const response = await callShopify(query);
  const allProducts = response.data.collections ? response.data.collections.edges : []

  return allProducts
}

export const getProductByCollection = async(handle) => {
  const query = productByCollection(handle)
  const response = await callShopify(query);
  const productsByCollection = response.data.collection && response.data.collection

  return productsByCollection
}

export const getFullRenderedCollection = async() => {
  const query = getFullAllCollections
  const response = await callShopify(query);
  const fullRenderedCollection = response.data.collections.edges && response.data.collections.edges

  return fullRenderedCollection
}

export const getAllCurrentTags = async() => {
  const query = allProductsQuery
  const response = await callShopify(query);
  const allCurrentTags = response.data.products.edges.map((item) => {
    return item.node.tags.length && item.node.tags
  })
  
  const uniqueTags = [...new Set(allCurrentTags.flat())]

  return uniqueTags.filter((item) => {
    return item !== 0
  })
}

export const getAllItemsByTag = async(tag) => {
  const query = allProductsQuery
  const response = await callShopify(query);
  const allMatchingItems = response.data.products.edges.filter(item => {
    return item.node.tags.includes(tag)
  })

  return allMatchingItems
}
