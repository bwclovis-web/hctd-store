const Timer = ({ days, hours, min, sec }) => (
  <div className="flex flex-col lg:flex-row justify-around items-center border-2 rounded py-0 w-full drop-shadow-lg bg-red-400">
    <div className="flex flex-col w-full lg:w-1/4">
      <span className="text-2xl uppercase py-3 font-bold tracking-wider w-full mb-3 bg-rose-800 text-slate-100">Days</span>
      <span className="font-display text-6xl pb-3">{days}</span>
    </div>
    <div className="flex flex-col w-full lg:w-1/4">
      <span className="text-2xl uppercase py-3 font-bold tracking-wider w-full mb-3 bg-rose-800 text-slate-100">hours</span>
      <span className="font-display text-6xl pb-3">{hours}</span>
    </div>
    <div className="flex flex-col w-full lg:w-1/4">
      <span className="text-2xl uppercase py-3 font-bold tracking-wider w-full mb-3 bg-rose-800 text-slate-100">minuets</span>
      <span className="font-display text-6xl pb-3">{min}</span>
    </div>
    <div className="flex flex-col w-full lg:w-1/4">
      <span className="text-2xl uppercase py-3 font-bold tracking-wider w-full mb-3 bg-rose-800 text-slate-100">seconds</span>
      <span className="font-display text-6xl pb-3">{sec}</span>
    </div>
  </div>
)

export default Timer
