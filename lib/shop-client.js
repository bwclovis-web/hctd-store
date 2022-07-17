import ShopClient from 'shopify-buy'

export const shopClient = ShopClient.buildClient({
    domain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_URL,
    storefrontAccessToken: process.env.NEXT_PUBLIC_STOREFRONT_ACCESS_TOKEN
});