import useCountdown from "hooks/useCountdown"
import Timer from "./partials/Timer"

const Countdown = ({ endDate }) => {
  const [ days, hours, min, sec ] = useCountdown(endDate)
  const endOfDays = days + hours + min + sec <= 0

  return endOfDays ? <div> DEEEAD</div> : <Timer days={days} hours={hours} min={min} sec={sec}/>
}

export default Countdown
