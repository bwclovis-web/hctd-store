
import Countdown from "components/molecules/Countdown/Countdown"
import Can3D from "components/atoms/Can3D"
import { useEffect } from "react"

const MaintenancePage = () => {
  const endDate = new Date('2022-10-01T03:24:00').getTime()
  useEffect(() => {
    window.localStorage.setItem('hctd-visited', true)
  })

  return (
    <section className="relative flex flex-col w-full justify-center items-center h-screen bg-linear-to-tr from-indigo-500 via-yellow-500 to-pink-500">
      {/* Headings at the very top */}
      <div className="w-full flex flex-col items-center pt-10 z-20" style={{ position: 'absolute', top: 0, left: 0 }}>
        <h1 className="font-display text-7xl lg:text-9xl text-slate-900">Happy Cat Tie Dye</h1>
        <p className="text-3xl tracking-widest pb-4 font-bold">Coming soon</p>
      </div>
      {/* 3D Can in front of heading, but heading is at top */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', zIndex: 30, transform: 'translate(-50%, -55%)', pointerEvents: 'none' }}>
        <Can3D />
      </div>
      <Countdown endDate={endDate}/>
    </section>
  )
}

export default MaintenancePage
