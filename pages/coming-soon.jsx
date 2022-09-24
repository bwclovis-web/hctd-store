import Countdown from "components/molecules/Countdown/Countdown"
import { useEffect } from "react"

const MaintenancePage = () => {
  const endDate = new Date('2022-10-01T03:24:00').getTime()
  useEffect(() => {
    window.localStorage.setItem('hctd-visited', true)
  })

  return (
    <section className="lg:flex w-full justify-center items-center h-screen bg-gradient-to-tr from-indigo-500 via-yellow-500 to-pink-500 ">
      <div className="h-full lg:h-1/2 flex justify-between items-center flex-col text-center p-10 lg:p-20 rounded-xl bg-gradient-to-br from-purple-500 via-orange-500/50 to-pink-500 shadow-2xl">
        <h1 className="font-display text-7xl lg:text-9xl text-slate-900">Happy Cat Tie Dye</h1>
        <p className="text-3xl tracking-widest pb-4 font-bold">Coming soon</p>
        <Countdown endDate={endDate}/>
      </div>
    </section>
  )
}

export default MaintenancePage
