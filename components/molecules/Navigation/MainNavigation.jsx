import Link from 'next/link'
import { navData } from 'Data/nav'

const MainNavigation = () => (
  <nav className="container">
    <div className="lg:px-4 flex justify-center items-center md:justify-between py-2 flex-col md:flex-row">
      <Link href="/" className="text-h3-dynamic font-display">
        Happy Cat Tie Dye
      </Link>

      <ul className="flex justify-between my-1 md:mt-0">
        {
          navData.map(item => (
            <li key={item.id} className="pr-4 last:pr-0">
              <Link href={item.src} className="uppercase py-2 text-sm sm:text-base">
                {item.title}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  </nav>
)

export default MainNavigation
