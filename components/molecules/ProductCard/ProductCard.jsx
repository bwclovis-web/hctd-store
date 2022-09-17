import Image from "next/image"
import Link from "next/link"
import { formatPrice } from "lib/formatPrice"
import { getImageUrl } from "./util"
import classNames from "classnames"


const ProductCard = ({ product, type, index, filter }) => {
  const imageUrl = getImageUrl(product.node)
  const { node } = product
  const nestPath = type === 'cat' ? `category/` : ''
  const renderPriceRange = prices => {
    const maxPrice = prices.maxVariantPrice.amount
    const minPrice = prices.minVariantPrice.amount
    return minPrice === maxPrice ? <span>{formatPrice(minPrice, "USD")}</span> : <span>{formatPrice(minPrice, "USD")} - {formatPrice(maxPrice, "USD")}</span>
  }

  const cardClasses = classNames({
    "h-full relative overflow-hidden rounded-md border border-slate-600 shadow-md": true,
    "scale-0 transition-transform hidden": !filter
  })
  return (
    <li className={cardClasses} key={index}>
      <Link href={`/shop/${nestPath}[slug]`} as={`/shop/${nestPath}${node.handle}`}>
        <a className="group h-full">
          <div className="bg-emerald-400/80
                        h-full w-full border-t-4 border-green-700
                        absolute z-10 translate-y-[86%] 
                        group-hover:translate-y-0
                        group-hover:bg-red-300/90
                        group-focus:bg-red-300/90
                        group-hover:border-none
                        group-focus:border-none
                        group-focus:translate-y-0
                        group-focus:items-center
                        group-hover:items-center
                        flex justify-center
                        transition-all"
          >
            <span className="text-lg
                            tracking-widest font-semibold uppercase
                            rounded-md flex justify-between w-full px-3
                            group-hover:bg-fuchsia-500
                            group-hover:border-2
                            group-focus:border-2
                            group-hover:w-auto
                            group-focus:w-auto
                            group-hover:items-center
                            group-focus:items-center
                            group-hover:p-5
                            group-hover:flex-col
                            group-focus:flex-col
                            group-hover:text-white
                            group-focus:text-white
                            group-hover:shadow
                            group-hover:hover:bg-fuchsia-700
                            group-focus:bg-fuchsia-700
                            group-hover:hover:transition-all
                            group-hover:hover:shadow-md
                            group-focus:p-3
                            group-focus:shadow"
            >
              <span>{node.title}</span>
              {node.priceRange && renderPriceRange(node.priceRange)}
            </span>
          </div>

          <Image
            src={imageUrl}
            alt=""
            layout="responsive"
            height={600}
            width={960}
            objectFit="cover"
          />
        </a>
      </Link>
    </li>
  )
}

export default ProductCard
