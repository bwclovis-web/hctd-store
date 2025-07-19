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
    <section className="relative flex flex-col w-full min-h-screen bg-gradient-to-tr from-indigo-500 via-yellow-500 to-pink-500">
      <div className="w-full max-w-4xl flex flex-col items-center justify-around pt-8 z-20 mx-auto px-4 sm:px-6 lg:px-8" style={{ top: 0, left: 0 }}>
        <h1
          ref={headingRef}
          className="font-display  text-slate-900 text-center"
        >
          Happy Cat Tie Dye
        </h1>
        <p
          ref={subheadingRef}
          className="text-xl sm:text-2xl md:text-3xl tracking-widest pb-4 font-bold text-center"
        >
          Returning soon
        </p>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 w-full justify-evenly items-center mt-4">
          <div className="flex-1 flex justify-center">
            <Image alt="Flufferton" src="/images/flufferton.png" width={240} height={300} className="w-40 sm:w-60 md:w-80 h-auto self-start" />
          </div>
          <div className="flex-1 flex justify-center">
            <Image alt="Paisley" src="/images/paisley.png" width={220} height={180} className="w-36 sm:w-56 md:w-72 h-auto scale-x-[-1] self-start" />
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] z-30 pointer-events-none w-full flex justify-center">
        <div className="w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] md:w-[520px] md:h-[520px] lg:w-[620px] lg:h-[620px]">
          <Can3D />
        </div>
      </div>
    </section>
  )
}

export default MaintenancePage
