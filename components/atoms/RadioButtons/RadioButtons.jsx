import { useEffect, memo } from "react"

const RadioButtons = ({ data, changeAction }) => {
  const handleVariationChange = (evt, available) => {
    !available ? evt.preventDefault() : changeAction(evt.target.value)
  }
  useEffect(() => {
    const inputs = document.querySelectorAll('.radio-buttons')
    const firstRadio = inputs[0]?.firstChild
    firstRadio && firstRadio.setAttribute('checked', 'true')
  }, [])

  return (
    <div className="radio-buttons flex mr-2">
      <input
        id={data.id}
        type="radio"
        name="variations"
        aria-disabled={!data.availableForSale}
        value={data.id}
        onChange={evt => handleVariationChange(evt, data.availableForSale)}
      />
      <label htmlFor={data.id} className="text-center">
        <span className="leading-none p-0 m-0">{data.selectedOptions[0].value}</span>
        {!data.availableForSale && <span className="sr-only">currently unavailable</span>}
      </label>
    </div>
  )
}

export default memo(RadioButtons)
