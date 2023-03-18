const dyeSchema = {
  title: 'Colors Used',
  name: 'dyeSchema',
  type: 'array',
  of: [{ type: 'string' }],
  options: {
    list: [{ title: 'Strawberry Skies', value: 'strawberry skies' },
      { title: 'Dragon Egg', value: 'dragon egg' },
      { title: 'Foggy Lake', value: 'foggy lake' },
      { title: 'Black Magic', value: 'black magic' },
      { title: 'Rust Monster', value: 'rust monster' },
      { title: 'Fireball', value: 'fireball' },
      { title: 'Cosmic Energy', value: 'cosmic energy' },
      { title: 'Schnozzberry', value: 'jars' },
      { title: 'Ember', value: 'ember' }]
  }
}
  
export default dyeSchema
