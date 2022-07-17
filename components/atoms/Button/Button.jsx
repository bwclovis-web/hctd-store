/* eslint-disable react/display-name */
import { forwardRef } from "react"
import classnames from 'classnames'

const Button = forwardRef(({ children, size, config, onClick, type, disabled }, ref) => {
    const ButtonClasses = classnames({
        'font-semibold uppercase text-lg transition border-solid border-2 border-inherit p-2 tracking-wide rounded-lg drop-shadow': true,
        'text-2xl p-6': size === 'large',
        'text-sm': size === 'small',
        'bg-emerald-700/80 hover:bg-emerald-700 text-white border-emerald-700': config === 'success',
        'border-0 shadow-none': config === 'svg',
        'bg-indigo-500 hover:bg-indigo-700 hover:border-indigo-500 text-white': config === 'default',
        'bg-slate-300 text-slate-400': disabled === true
    })
    return (
        <button ref={ref} className={ButtonClasses} onClick={onClick} disabled={disabled} type={type ? type : 'button'}>
            {children}
        </button>
    )
})

export default Button;