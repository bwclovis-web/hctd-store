import Image from "next/image"
import Link from "next/link"

const VendingCalendarComponent = () => {
    return (
        <div className="flex relative w-full justify-center items-center h-80">
            <Image
                alt={''}
                src='/images/pex.jpg'
                layout="fill"
                objectFit="cover"
                objectPosition="center"
            />
            <div className="absolute bg-gradient-to-l from-indigo-500/40 to-blue-800 w-full h-full">
                <div className="container flex justify-around items-center w-full h-full">
                    <div className="flex flex-col items-center justify-start gap-2 max-w-1/3 text-slate-100">
                        <h2 className="text-8xl font-display drop-shadow-xl shadow-black">Come See Us!</h2>
                        <p className="text-2xl font-semibold tracking-wide">Happy Cat Tye dye will be vending</p>
                    </div>
                    <Link href="/schedule">
                        <a className="ghost-link">See Schedule</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default VendingCalendarComponent