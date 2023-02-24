import renderKeywords from 'lib/renderKeywords'
import { NextSeo } from 'next-seo'

const SiteSeo = ({ data }) => <NextSeo
  title={data.pageTitle}
  description={data.pageDescription}
  additionalMetaTags={renderKeywords(data.keywords)}
/>

export default SiteSeo
