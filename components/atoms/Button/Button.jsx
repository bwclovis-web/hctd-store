/* eslint-disable react/display-name */
import { forwardRef } from "react"
import classnames from 'classnames'

const Button = forwardRef(({ children, size, config, onClick, type, disabled, id, label }, ref) => {
  const ButtonClasses = classnames({
    'font-semibold uppercase transition border-solid border-2 border-inherit rounded-lg drop-shadow': true,
    'text-m tracking-wide': size === 'small',
    'text-xl px-6 py-4 tracking-wider': size === 'large',
    'bg-emerald-700/80 hover:bg-emerald-700 text-white border-emerald-700': config === 'success',
    'border-0 shadow-none': config === 'svg',
    'bg-indigo-500 border-indigo-700 hover:bg-indigo-700 hover:border-indigo-500 text-white shadow-xl': config === 'default',
    'bg-slate-300 text-slate-400 focus:bg-slate-300 border-slate-400 focus:border-slate-400': disabled === true
  })
  return (
    <button id={id} aria-label={label} ref={ref} className={ButtonClasses} onClick={onClick} disabled={disabled} type={type ? type : 'button'}>
      {children}
    </button>
  )
})

export default Button
