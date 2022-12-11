import Image from "next/image"
import Link from "next/link"

const DyeShopBanner = () => (
  <div className="flex relative w-full justify-center items-center">
    <Image
      alt={''}
      src="/images/dyes.jpg"
      layout="fill"
      objectFit="cover"
      objectPosition="center"
    />
    <div className="relative bg-gradient-to-r from-cyan-500/10 to-black w-full h-full py-12">
      <div className="container flex justify-center items-center w-full h-full">
        <div className="flex flex-col items-center justify-start max-w-1/3 text-slate-100 bg-black/70 px-8 py-12 rounded-lg shadow-lg backdrop-blur-sm text-center">
          <h2 className="text-h2-dynamic font-display leading-none pb-2">Custom Dye Shop</h2>
          <p className="text-xl font-semibold tracking-wide mb-8 text-center">Custom blended colors for all your dyeing needs.</p>
          <Link href="/shop/category/dyes" className="ghost-link">
            Go to dye shop
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default DyeShopBanner
