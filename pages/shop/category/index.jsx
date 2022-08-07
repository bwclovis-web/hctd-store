import { getFullRenderedCollection } from "lib/shopifyGraphql"

const CategoryRootPage = ({ }) => (
  <section style={{ backgroundColor: "rgb(82, 204, 186)" }}>
    <div className="container">
      <h2 className="h1 center">Categories</h2>
      <p className="h3 center">Shop by category to find yer thing</p>
    </div>
  </section>
)


export async function getStaticProps() {
  const collections = await getFullRenderedCollection()
  return {
    props: {
      collections: JSON.parse(JSON.stringify(collections))
    }
  }
}

export default CategoryRootPage
