import { NextSeo } from 'next-seo'

const SiteSeo = ({ data }) => <NextSeo
  title={data.title}
  description={data.description}
  additionalMetaTags={data.additional}
/>

export default SiteSeo
