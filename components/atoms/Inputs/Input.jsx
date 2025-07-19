import classNames from "classnames"

const Input = ({ type, id, onChange, required, value, name, label, autoComplete, rows }) => {
  const labelClasses = classNames({
    "text-xl rounded uppercase tracking-wide p-1 -translate-y-12 translate-x-4 inline-block transition-all peer-focus:-translate-y-24 peer-focus:-translate-x-0 peer-focus:bg-white/40": true,
    "-translate-y-24 -translate-x-0 bg-white/20": value,
    "-translate-y-14 peer-focus:-translate-y-2": type === 'textArea'
  })
  if(type === 'textArea') {
    return (
      <div>
        <textarea 
          id={id}
          rows={rows}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full rounded shadow-inner border-2 border-red-700 my-2 peer"
        />
        <label 
          htmlFor={name}
          className={labelClasses}
        >
          {label}
        </label>
      </div>
    )
  }
  return (
    <div className="my-2">
      <input
        id={id}
        type={type}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        name={name}
        required={required}
        className="border-red-600 border-2 w-full p-4 font-medium text-xl rounded shadow-inner peer"
      />
      <label 
        htmlFor={name}
        className={labelClasses}
      >
        {label}
      </label>
    </div>
  )
}

export default Input
