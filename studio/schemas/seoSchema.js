const seoSchema =  {
  name: 'seoSchema',
  type: 'object',
  title: 'Page Seo',
  fields: [{
    name: 'pageTitle',
    type: 'string',
    title: 'Page Title'
  },
  {
    name: 'pageDescription',
    type: 'string',
    title: 'Page Description'
  },

  {
    name: 'keywords',
    type: 'string',
    title: 'Page Keywords'
  }]
}
    
export default seoSchema
