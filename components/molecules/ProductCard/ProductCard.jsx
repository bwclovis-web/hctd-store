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
    return minPrice === maxPrice ? <span className="text-md">{formatPrice(minPrice, "USD")}</span> : <span className="text-base">{formatPrice(minPrice, "USD")} - {formatPrice(maxPrice, "USD")}</span>
  }
  const cardClasses = classNames({
    "h-full relative overflow-hidden rounded border border-slate-600 shadow-md": true,
    "scale-0 transition-transform hidden": !filter
  })
  const spanClasses = classNames({
    'tracking-widest text-xl': true,
    'inline-block mx-auto': !node.priceRange
  })
  const innerCardClasses = classNames({
    "h-full w-full absolute z-10 flex justify-center transition-all": true,
    "bg-orange-300/90 border-t-4 border-orange-700 text-orange-900 translate-y-[84%] lg:translate-y-[88%] xl:translate-y-[76%] 2xl:translate-y-[88%] group-hover:translate-y-0 group-hover:bg-red-300/90 group-focus:bg-red-300/90 group-hover:border-none group-focus:border-none group-focus:translate-y-0 group-focus:items-center group-hover:items-center ": node.availableForSale,
    "bg-slate-600/70 translate-y-0 border-t-0 items-center ": !node.availableForSale
  })
  const cardSpanClasses = classNames({
    "text-lg font-semibold capitalize rounded flex items-baseline": true,
    "justify-between w-full px-3 group-hover:bg-fuchsia-500 group-hover:border-2 group-focus:border-2 group-hover:w-auto group-focus:w-auto group-hover:items-center group-focus:items-center group-hover:p-5 group-hover:flex-col group-focus:flex-col group-hover:text-slate-200 group-focus:text-white group-hover:shadow group-hover:hover:bg-fuchsia-700 group-focus:bg-fuchsia-700 group-hover:hover:transition-all group-hover:hover:shadow-md group-focus:p-3 group-focus:shadow": node.availableForSale,
    "bg-slate-600 px-4 py-2 text-slate-100 border-2 border-black": !node.availableForSale
  })
  const checkItem = (evt, isAvailable) => {
    !isAvailable && evt.preventDefault()
  }
  return (
    <li className={cardClasses} key={index}>
      <Link href={`/shop/${nestPath}[slug]`} as={`/shop/${nestPath}${node.handle}`}>
        <a className="group h-full" onClick={evt => checkItem(evt, node.availableForSale)}>
          <div className={innerCardClasses} >
            <span className={cardSpanClasses}>
              <span className={spanClasses}>{node.availableForSale ? node.title : 'out of stock'}</span>
              {(node.priceRange && node.availableForSale) && renderPriceRange(node.priceRange)}
            </span>
          </div>

          <Image
            src={imageUrl}
            alt=""
            layout="responsive"
            height={600}
            width={960}
            objectFit="cover"
            placeholder="blur"
            blurDataURL={`/_next/image?url=${imageUrl}&w=16&q=1`}
          />
        </a>
      </Link>
    </li>
  )
}

export default ProductCard
