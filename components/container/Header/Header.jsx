
import MainNavigation from "../../molecules/Navigation/MainNavigation"
import UtilNav from "../../molecules/UtilityNav/UtilityNav"
import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

const Header = () => {
    const headerRef = useRef()
    const router = useRouter()
    const resetFocus = () => {
        console.log('called', headerRef.current)
        headerRef.current.focus()
    }
    useEffect(() => {
        router.events.on('routeChangeComplete', resetFocus)
        return () => {
            router.events.off('routeChangeComplete', resetFocus)
        }
    },[router])
    return(
    <header className="container py-0 outline-none" ref={headerRef} tabIndex={-1}>
        <>
            <UtilNav />
            <MainNavigation />
        </>
    </header>
)}

export default Header