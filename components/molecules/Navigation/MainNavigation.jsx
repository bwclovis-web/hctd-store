import { navData } from '../../../Data/nav'
import Link from 'next/link'

const MainNavigation = () => {
    return (
        <nav className="container">
            <div className='lg:px-4 flex justify-center items-center md:justify-between py-2 flex-col md:flex-row'>
                <Link href="/">
                    <a className="text-h3-dynamic font-display">Happy Cat Tie Dye</a>
                </Link>
                <div className='flex content-center items-center mt-1 md:mt-0'>
                    <ul className='flex justify-around'>
                        {
                            navData.map(item => {
                                return (
                                    <li key={item.id} className="pr-3 lg:pr-4 last:pr-0">
                                        <Link href={item.src}>
                                            <a className='uppercase'>{item.title}</a>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default MainNavigation
