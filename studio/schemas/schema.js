// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import faqs from './faq'
import page from './page'
import siteBanner from './siteBanner'
import hero from './hero'
import featuredArtist from './featuredArtist'
import artistEntry from './artistEntry'
import socialMediaLinks from './socialMedia'
import socialMediaTypes from './socialMediaTypes'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([ page,
    hero,
    siteBanner,
    faqs,
    artistEntry,
    featuredArtist,
    socialMediaLinks,
    socialMediaTypes,
    blockContent, ]),
})
