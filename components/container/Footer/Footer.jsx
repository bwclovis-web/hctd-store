import { navData } from 'Data/footer'
import Link from 'next/link'
const Footer = () =>   <>
  <footer className="bg-violet-800 py-3 text-slate-100 relative">
    <div className="container text-center">
      <span className="font-semibold tracking-wide text-lg">Copyright ©2023 Happy Cat Tie Dye. All Rights Reserved </span>
      <ul className="flex justify-center items-center gap-2 mt-3">
        {navData.map(item => (
          <li key={item.id} className="border-r-2 pr-2 last-of-type:border-r-0 underline">
            <Link href={item.src}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </footer>
</>
export default Footer
