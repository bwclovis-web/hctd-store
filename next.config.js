/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.shopify.com'],
  },
  async redirects() {
    return [{
      source: '/',
      destination: '/coming-soon',
      permanent: true
    }]
  }
}

module.exports = nextConfig
