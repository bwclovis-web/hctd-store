import classNames from "classnames"
import { useState } from "react"
import { BsPatchMinusFill, BsPatchPlusFill } from "react-icons/bs"
import { PortableText } from '@portabletext/react'

const AccordionItem = ({ id, question, answer }) => {
  const [ isActive, setIsActive ] = useState(false)

  const AccordionClasses = classNames({
    'opacity-0 translate-y-100 transition-all max-h-0 w-full rounded bg-sky-200': true,
    'opacity-100 translate-y-0 max-h-full py-auto p-4': isActive
  })

  const IconClasses = classNames({
    'group-active:translate-y-1 text-orange-600 drop-shadow-xl': true,
    'text-emerald-700': isActive
  })

  return (
    <li key={id}>
      <button
        className="relative flex items-center text-left text-2xl py-3 tracking-wide gap-4 group w-full font-bold"
        aria-expanded={isActive}
        aria-controls={`item-${id}`}
        id={`q-${id}`}
        onClick={() => setIsActive(!isActive)}
      >
        <span className={IconClasses}> {isActive ? <BsPatchMinusFill size={40}  /> : <BsPatchPlusFill size={40} />} </span>
        <span>{question}</span>
      </button>
      <div className={AccordionClasses} id={id} role="region" aria-hidden={!isActive} aria-labelledby={`q-${id}`}>
        <div className="tracking-wide font-semibold">
          <PortableText value={answer}/>
        </div>
      </div>
    </li>
  )
}

export default AccordionItem
