import Image from "next/image"
import Link from "next/link"

const DyeShopBanner = () => {
    return (
        <div className="flex relative w-full justify-center items-center h-96">
            <Image
                alt={''}
                src='/images/dyes.jpg'
                layout="fill"
                objectFit="cover"
                objectPosition="center"
            />
            <div className="absolute bg-gradient-to-r from-cyan-500/10 to-black w-full h-full pr-16">
                <div className="container flex justify-center items-center w-full h-full">
                    <div className="flex flex-col items-center justify-start max-w-1/3 text-slate-100 bg-black/70 px-8 py-12 rounded-lg shadow-lg backdrop-blur-sm">
                        <h2 className="text-8xl font-display drop-shadow-xl shadow-black mb-2">Custom Dye Shop</h2>
                        <p className="text-2xl font-semibold tracking-wide mb-8">Custom blended colors for all your dying needs.</p>
                        <Link href="/shop/category/dyes">
                            <a className="ghost-link">Go to dye shop</a>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DyeShopBanner