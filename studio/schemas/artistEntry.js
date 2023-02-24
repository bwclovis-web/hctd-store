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
    type: 'dyeSchema',
    title: 'Colors Used',
    
  }, {
    name: "otherColors",
    type: 'array',
    title: 'Other Colors',
    of: [{ type: 'string' }],
  }]
}
  
export default artistEntry
  
