const siteBanner =  {
  name: 'sitebanner',
  title: 'Site Alert Banner',
  type: 'document',
  fields: [{
    name: 'content',
    type: 'string',
    title: 'Content',
    validation: Rule => Rule.required().min(10).max(80)
  },
  {
    name: 'startDate',
    title: 'Start Date',
    type: 'date'
  },
  {
    name: 'endDate',
    title: 'End Date',
    type: 'date'
  },
  {
    title: 'Banner Color',
    name: 'bannerColor',
    type: 'array',
    of: [{ type: 'string' }],
    validation: Rule => Rule.required(),
    options: {
      list: [{ title: 'Red', value: 'red' },
        { title: 'Blue', value: 'blue' },
        { title: 'Yellow', value: 'yellow' },
        { title: 'Green', value: 'green' }]
    }
  },
  
  {
    title: 'Display banner (override)',
    name: 'bannerDisplay',
    type: 'boolean',
  }]
}

export default siteBanner

