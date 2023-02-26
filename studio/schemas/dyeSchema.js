const dyeSchema = {
  title: 'Colors Used',
  name: 'dyeSchema',
  type: 'array',
  of: [{ type: 'string' }],
  options: {
    list: [{ title: 'Strawberry Skies', value: 'strawberry skies' },
      { title: 'Dragon Egg', value: 'dragon egg' },
      { title: 'Foggy Lake', value: 'foggy lake' },
      { title: 'Rust Monster', value: 'rust monster' },
      { title: 'Ember', value: 'ember' }]
  }
}
  
export default dyeSchema
