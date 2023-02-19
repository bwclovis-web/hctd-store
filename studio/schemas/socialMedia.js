const socialMediaLinks =  {
  name: 'socialMediaLinks',
  type: 'object',
  title: 'Social Media Links',
  fields: [{
    name: 'type',
    type: 'socialMediaTypes',
    title: 'Type'
  },
  {
    name: 'url',
    type: 'string',
    title: 'Url'
  }]
}
  
export default socialMediaLinks
  
