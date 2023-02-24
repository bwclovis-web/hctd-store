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
import configuredLink from './configuredLink'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([ page,
    hero,
    siteBanner,
    faqs,
    configuredLink,
    artistEntry,
    featuredArtist,
    socialMediaLinks,
    socialMediaTypes,
    blockContent, ]),
})
