import { setFocusTrap } from 'lib/trapFocus'
import { useState, useEffect } from 'react'
import { getScreenSize } from 'utils/getScreenSize'
import { throttle } from 'utils/utils'

const UseNavigation = () => {
  const [ navOpen, setNavOpen ] = useState(false)
  const [ navSize, getNavSize ] = useState()
  const toggleNav = () => {
    setNavOpen(!navOpen)
  }
  const setScreenSize = () => {
    const screenSize = getScreenSize()
    getNavSize(screenSize)
  }

  useEffect(() => {
    window.addEventListener('resize', throttle(setScreenSize, 500) )

    return () => {
      window.removeEventListener('resize', throttle(setScreenSize, 500) )
    }
  }, [])

  useEffect(() => {
    const root = document.documentElement
    const nav = document.getElementById('main-navigation')
    if (navSize === "small") {
      if(navOpen) {
        const trigger = document.getElementById('nav-close')
        root.classList.add('open')
        trigger?.focus()
        setFocusTrap(nav)
      } else {
        root.classList.remove('open')
        setFocusTrap(nav, 'hctd-nav')
      }
    }
  }, [ navOpen, navSize ])

  return [ navOpen, toggleNav, navSize ]
}

export default UseNavigation
