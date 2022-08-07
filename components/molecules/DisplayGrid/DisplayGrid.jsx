import Link from "next/link"
import classNames from "classnames"
import ProductCard from "../ProductCard/ProductCard"

const DisplayGrid = ({ data, cols, type, title, cat }) => {
  const GridClasses = classNames({
    'grid grid-cols-1 md:grid-cols-2 gap-4': true,
    'lg:grid-cols-4': cols === 4,
    'lg:grid-cols-5': cols === 5
  })

  const containerClasses = classNames({
    "relative": true,
    "pb-12": data.length >= 4 && cat
  })

  if(!data.length) {
    return
  }

  return (
    <div className={containerClasses}>
      {title ? <h2 className="font-display text-h2-dynamic capitalize">{title}</h2> : null}
      <ul className={GridClasses}>
        {data?.map(item => <ProductCard product={item} display={cols} key={item.node.id} type={type} />)}
      </ul>
      {
        (data.length >= 4 && cat) &&
                <Link href={`/shop/category/${cat}`}>
                  <a className="absolute bottom-2 right-3 text-blue-700 font-semibold uppercase underline">shop more {cat}</a>
                </Link>
      }
    </div>
  )
}

export default DisplayGrid
