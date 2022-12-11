import Image from "next/legacy/image";
import Link from "next/link"

const VendingCalendarComponent = () => (
  <div className="flex relative w-full justify-center items-center h-80">
    <Image
      alt={''}
      src="/images/pex.jpg"
      layout="fill"
      objectFit="cover"
      objectPosition="center"
    />
    <div className="relative bg-gradient-to-l from-indigo-500/40 to-blue-800 w-full h-full">
      <div className="container flex flex-col lg:flex-row justify-center lg:justify-around items-center w-full h-full">
        <div className="flex flex-col items-center justify-start max-w-1/3 text-slate-100 mb-6 lg:mb-0">
          <h2 className="text-h2-dynamic font-display drop-shadow-xl shadow-black">Come See Us!</h2>
          <p className="text-2xl font-semibold tracking-wide">Happy Cat Tie Dye will be vending</p>
        </div>
        <Link href="/schedule" className="ghost-link">
          See Schedule
        </Link>
      </div>
    </div>
  </div>
)

export default VendingCalendarComponent
