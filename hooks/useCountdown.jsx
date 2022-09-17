import { useEffect, useState } from "react"

const getReturnValues = timer => {
  const days = Math.floor(timer / (1000 * 60 * 60 * 24))
  const hours = Math.floor((timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const min = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60))
  const sec = Math.floor((timer % (1000 * 60)) / 1000)
  
  return [ days, hours, min, sec ]
}

const useCountdown = endDate => {
  const targetDate = new Date(endDate).getTime()
  const [ countdown, setCountdown ] = useState(targetDate - new Date().getTime())

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(targetDate - new Date().getTime())
    }, 1000)
    return () => clearInterval(interval)
  }, [targetDate])

  return getReturnValues(countdown)
}

export default useCountdown
