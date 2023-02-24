const socialMediaTypes = {
  title: 'Social Media Types',
  name: 'socialMediaTypes',
  type: 'array',
  of: [{ type: 'string' }],
  options: {
    list: [{ title: 'Facebook', value: 'facebook' },
      { title: 'Twitter', value: 'twitter' },
      { title: 'Instagram', value: 'instagram' },
      { title: 'TikTok', value: 'tiktok' },
      { title: 'Youtube', value: 'youtube' }]
  }
}

export default socialMediaTypes
