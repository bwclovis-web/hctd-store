import { NextSeo } from 'next-seo'
import { renderKeywords } from 'utils/utils'

const SiteSeo = ({ data }) => <NextSeo
  title={data.pageTitle}
  description={data.pageDescription}
  additionalMetaTags={renderKeywords(data.keywords)}
/>

export default SiteSeo
