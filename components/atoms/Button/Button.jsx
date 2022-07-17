/* eslint-disable react/display-name */
import { forwardRef } from "react"
import classnames from 'classnames'

const Button = forwardRef(({ children, size, config, onClick, type }, ref) => {
    const ButtonClasses = classnames({
        'font-semibold uppercase text-lg border-solid border-2 border-inherit p-2 tracking-wide rounded shadow': true,
        'text-2xl p-6': size === 'large',
        'text-sm': size === 'small',
        'bg-emerald-700/80 hover:bg-emerald-700 text-white border-emerald-700': config === 'success',
        'border-0 shadow-none': config === 'svg',
        'bg-indigo-500 text-white': config === 'default'
    })
    return (
        <button ref={ref} className={ButtonClasses} onClick={onClick} type={type ? type : 'button'}>
            {children}
        </button>
    )
})

export default Button;