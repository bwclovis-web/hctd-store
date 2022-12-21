const page =  {
  name: 'page',
  title: 'Page',
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
    name: 'slug',
    title: 'Slug',
    type: 'slug',
    options: {
      source: 'title',
      maxLength: 96,
    },
  },
    //   {
    //     name: 'author',
    //     title: 'Author',
    //     type: 'reference',
    //     to: { type: 'author' },
    //   },
    //   {
    //     name: 'mainImage',
    //     title: 'Main image',
    //     type: 'image',
    //     options: {
    //       hotspot: true,
    //     },
    //   },
    //   {
    //     name: 'categories',
    //     title: 'Categories',
    //     type: 'array',
    //     of: [{ type: 'reference', to: { type: 'category' } }],
    //   },
    //   {
    //     name: 'publishedAt',
    //     title: 'Published at',
    //     type: 'datetime',
    //   },
    //   {
    //     name: 'body',
    //     title: 'Body',
    //     type: 'blockContent',
    //   }, 
  ],
  
  preview: {
    select: {
      title: 'pageTitle',
      author: 'author.name',
      media: 'pageHero.heroImage',
    },
    prepare(selection) {
      const { author } = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}

export default page
  
