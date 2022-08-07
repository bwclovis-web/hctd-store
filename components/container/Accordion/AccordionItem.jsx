import classNames from "classnames"
import { useState } from "react"

const AccordionItem = ({ id, question, answer }) => {
    const [ isActive, setIsActive ] = useState(false)
    const AccordionClasses = classNames({
        'opacity-0 translate-y-100 transition-all py-0 max-h-0 px-3': true,
        'opacity-100 translate-y-0 max-h-full py-auto': isActive
    })

    return (
        <li key={id}>
            <button
                className="relative flex items-center text-left text-2xl py-3 tracking-wide"
                aria-expanded={isActive}
                aria-controls={id}
                id={`q-${id}`}
                onClick={() => setIsActive(!isActive)}
            >
                <span> {isActive ? '-' : '+'} </span>
                <span>{question}</span>
            </button>
            <div className={AccordionClasses} id={id} role="region" aria-hidden={!isActive} aria-labelledby={`q-${id}`}>
                <span className="text-lg">{answer}</span>
            </div>
        </li>
    )
}

export default AccordionItem
