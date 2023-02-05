const featuredArtist = {
  name: 'featuredArtist',
  title: 'Featured Artist',
  type: 'document',
  fields: [{
    name: 'pageTitle',
    title: 'Page Title',
    type: 'string'
  },
  {
    name: 'pageHero',
    title: 'Page Hero',
    type: 'hero',
  },
  {
    name: "isFeatured",
    title: "Is Featured",
    type: 'boolean'
  },
  {
    name: "bio",
    title: "Brief Bio",
    type: 'blockContent'
  },
  {
    name: 'artistEntry',
    title: 'Artist Entry',
    type: 'array',
    of: [{ type: 'artistEntry' }]
  }]
}

export default featuredArtist
