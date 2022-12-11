import Image from "next/legacy/image";
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
    return minPrice === maxPrice ? <span className="text-lg mt-1">{formatPrice(minPrice, "USD")}</span> : <span className="text-lg mt-1">{formatPrice(minPrice, "USD")} - {formatPrice(maxPrice, "USD")}</span>
  }

  const cardClasses = classNames({
    'flex flex-col-reverse justify-center': true,
    "scale-0 transition-transform hidden": !filter
  })

  const spanClasses = classNames({
    'tracking-widest text-xl': true,
    'inline-block mx-auto': !node.priceRange
  })
  const linkClasses = classNames({
    "px-1 mt-4 py-2 border-2 shadow capitalize text-center w-full lg:w-2/3 mx-auto peer": true,
    "border-fuchsia-800 bg-fuchsia-200 text-fuchsia-800 hover:bg-fuchsia-800 hover:text-fuchsia-200 hover:border-fuchsia-300 hover:transition-all hover:shadow-md ": node.availableForSale,
    "bg-slate-600 text-slate-100 border-2 border-black pointer-events-none": !node.availableForSale
  })

  const checkItem = (evt, isAvailable) => {
    !isAvailable && evt.preventDefault()
  }
  return (
    <li key={index} className={cardClasses}>
      <Link
        href={`/shop/${nestPath}[slug]`}
        as={`/shop/${nestPath}${node.handle}`}
        onClick={evt => checkItem(evt, node.availableForSale)}
        className={linkClasses}>

        <div>
          <span className="flex flex-col">
            <span className={spanClasses}>{node.availableForSale ? node.title : 'out of stock'}</span>
            {(node.priceRange && node.availableForSale) && renderPriceRange(node.priceRange)}
          </span>
        </div>

      </Link>
      <div className="h-full relative border-4 border-purple-600 peer-hover:border-emerald-700 peer-hover:shadow-xl transition-all">
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
      </div>
      
    </li>
  );
}

export default ProductCard
