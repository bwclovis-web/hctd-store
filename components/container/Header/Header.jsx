import React from "react"
import MainNavigation from "../../molecules/Navigation/MainNavigation"
import UtilNav from "../../molecules/UtilityNav/UtilityNav"

const Header = () => (
    <header className="container py-0">
        <>
            <UtilNav />
            <MainNavigation />
        </>
    </header>
)

export default Header