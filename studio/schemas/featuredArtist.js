const featuredArtist = {
  name: 'featuredArtist',
  title: 'Featured Artist',
  type: 'document',
  fields: [{
    name: 'pageTitle',
    title: 'Page Title',
    type: 'string'
  }, {
    title: 'Slug',
    name: 'slug',
    type: 'slug',
    options: {
      source: 'pageTitle',
      slugify: input => input
        .toLowerCase()
        .replace(/\s+/g, '-')
        .slice(0, 200)
    }
  },
  {
    name: "firstName",
    title: "First Name",
    type: "string"
  },
  {
    name: "lastName",
    title: "Last Name",
    type: "string"
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
    name: "websiteLink",
    title: "Link To Artist site",
    type: 'configuredLink'
  },
  {
    name: "socialMedia",
    title: "Social Media",
    type: 'array',
    of: [{ type: 'socialMediaLinks' }]
  },
  {
    name: 'artistEntry',
    title: 'Artist Entry',
    type: 'array',
    of: [{ type: 'artistEntry' }]
  }]
}

export default featuredArtist
