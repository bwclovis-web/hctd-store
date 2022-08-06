import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "../../../lib/formatPrice";
import { getImageUrl } from "./util";


const ProductCard = ({ product, type, key }) => {
    const imageUrl = getImageUrl(product.node);
    const { node } = product;
    const nestPath = type === 'cat' ? `category/` : ''
    const renderPriceRange = (prices) => {
        const maxPrice = prices.maxVariantPrice.amount;
        const minPrice = prices.minVariantPrice.amount;
        return minPrice === maxPrice ? <span>{formatPrice(minPrice, "USD")}</span> : <span>{formatPrice(minPrice,"USD")} - {formatPrice(maxPrice,"USD")}</span>
    }
    return (
        <li className={`h-full relative overflow-hidden rounded-md`} key={key}>
            <Link href={`/shop/${nestPath}[slug]`} as={`/shop/${nestPath}${node.handle}`} className="">
                <a className="group font-normal">
                    <div className="bg-slate-400 
                        h-full w-full 
                        absolute z-10 translate-y-[86%] 
                        group-hover:translate-y-0
                        group-hover:bg-slate-400/60
                        group-focus:bg-slate-400/60
                        group-hover: backdrop-blur
                        group-focus:translate-y-0
                        group-focus:items-center
                        group-hover:items-center
                        flex justify-center
                        transition-all"
                    >
                        <p className="text-lg
                            tracking-wider font-medium uppercase
                            rounded-md flex justify-between w-full px-3
                            group-hover:bg-emerald-700
                            group-hover:w-auto
                            group-focus:w-auto
                            group-hover:items-center
                            group-focus:items-center
                            group-hover:p-5
                            group-hover:flex-col
                            group-hover:text-white
                            group-hover:shadow
                            group-hover:hover:bg-purple-500
                            group-hover:hover:transition-all
                            group-hover:hover:shadow-md
                            group-focus:bg-emerald-700
                            group-focus:p-3 
                            group-focus:text-white
                            group-focus:shadow"
                        >
                            <span>{node.title}</span>
                            {node.priceRange && renderPriceRange(node.priceRange)}
                        </p>
                    </div>

                    <Image
                        src={imageUrl}
                        alt=''
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