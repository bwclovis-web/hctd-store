import Dexie from 'dexie'
const database  = new Dexie("database")

database.version(1).stores({
  favorites: 'id, image, title, slug, timestamp'
})

export const hctdFavorites = database.table('favorites')

export default database
