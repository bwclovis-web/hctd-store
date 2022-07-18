export const singleProductPageQuery = (handle) => `{
    product(handle:"${handle}" ){
      availableForSale
      id
      title
      tags
      descriptionHtml
      images(first:10) {
        edges {
          node {
            id
            url
          }
        }
      }
      featuredImage{
        url
      }
      variants(first:6) {
        edges {
          node {
            id
            selectedOptions {
              name
              value
            }
            priceV2 {
              amount
              currencyCode
            }
          }
        }
      }
      collections(first: 1) {
        edges {
          node {
            handle
            title
            products(first: 4) {
              edges {
                node {
                  handle
                  id
                  title
                  availableForSale
                  featuredImage {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
}`

export const allProductsQuery = `{
  products(first: 250) {
    edges {
      node {
        title
        handle
        availableForSale
        tags
        featuredImage {
          url
        }
      }
    }
  }
}`

export const productByCollection = (handle) => `{
  collection(handle:"${handle}"){
    title
    products(first: 20) {
      edges {
        node {
          availableForSale
          handle
          tags
          title
          featuredImage {
            url
          }
        }
      }
    }
  }
}`

export const allCollectionsQuery = `{
  collections(first:20){
    edges {
      node {
        handle
        id
      }
    }
  }
}`

export const getFullAllCollections = `{
  collections(first: 10) {
    edges {
      node {
        id
        handle
        title
        image {
          url
        }
      }
    }
  }
}`

export const homePageQuery = `{
    products(first: 4, reverse: true) {
        edges {
          node {
            title
            handle
            availableForSale
            collections(first: 10) {
              edges {
                node {
                  handle
                }
              }
            }
            featuredImage {
              url
            }
          }
        }
      }
      collections(first: 10) {
        edges {
          node {
            id
            handle
            title
            image {
              url
            }
          }
        }
    }
}`

export const shopPageQuery = `{
  products(sortKey: UPDATED_AT, first: 40) {
      edges {
        node {
          title
          handle
          availableForSale
          priceRange {
            maxVariantPrice {
              amount
            }
            minVariantPrice {
              amount
            }
          }
          collections(first: 10) {
            edges {
              node {
                handle
              }
            }
          }
          featuredImage {
            url
          }
        }
      }
    }
    collections(first: 10) {
      edges {
        node {
          id
          handle
          title
          image {
            url
          }
        }
      }
  }
}`
