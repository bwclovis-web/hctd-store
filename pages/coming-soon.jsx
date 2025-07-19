import Can3D from "components/atoms/Can3D"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import Image from "next/image"

const MaintenancePage = () => {
  const endDate = new Date('2022-10-01T03:24:00').getTime()
  const headingRef = useRef(null)
  const subheadingRef = useRef(null)

  useEffect(() => {
    window.localStorage.setItem('hctd-visited', true)
    // Animate text after can entrance (delay matches can drop duration)
    gsap.set([ headingRef.current, subheadingRef.current ], { opacity: 0, y: 40 })
    gsap.to(headingRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.1,
      delay: 2.3,
      ease: 'power3.out',
    })
    gsap.to(subheadingRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.1,
      delay: 2.6,
      ease: 'power3.out',
    })
  }, [])

  return (
    <section className="relative flex flex-col w-full justify-start items-start h-screen bg-linear-to-tr from-indigo-500 via-yellow-500 to-pink-500">
      <div className="w-1/2 flex flex-col items-center justify-around pt-10 z-20 mx-auto" style={{ top: 0, left: 0 }}>
        <h1 ref={headingRef} className="font-display text-7xl lg:text-9xl text-slate-900">Happy Cat Tie Dye</h1>
        <p ref={subheadingRef} className="text-3xl tracking-widest pb-4 font-bold">Coming soon</p>
        <div className="flex gap-10 w-full justify-evenly items-start">
          <Image alt="" src="/images/flufferton.png" width={400} height={500} className="self-start" />
          <Image alt="" src="/images/paisley.png" width={380} height={300} className="scale-x-[-1] self-start" />
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] z-30 pointer-events-none"> 
        <Can3D />
      </div>
      
    </section>
  )
}

export default MaintenancePage
