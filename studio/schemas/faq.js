const faqs =  {
  name: 'faq',
  type: 'object',
  title: 'Frequently asked question',
  fields: [{
    name: 'question',
    type: 'string',
    title: 'Question'
  },
  {
    name: 'answer',
    type: 'array',
    title: 'Answer',
    of: [{
      type: 'block'
    }]
  }]
}

export default faqs
