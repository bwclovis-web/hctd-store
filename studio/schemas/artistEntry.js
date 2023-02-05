const artistEntry =  {
  name: 'artistEntry',
  type: 'object',
  title: 'Artist Entry',
  fields: [{
    name: 'title',
    type: 'string',
    title: 'Title'
  },
  {
    name: 'submissionImage',
    title: 'Submission Image',
    type: 'image',
    options: {
      hotspot: true,
      metadata: [ 'lqip', 'blurhash' ]
    },
  },
  {
    name: 'colors',
    type: 'array',
    title: 'Colors Used',
    of: [{
      type: 'block'
    }]
  }]
}
  
export default artistEntry
  
