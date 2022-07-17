import { useEffect, memo} from "react";

const RadioSelect = ({ data, changeAction }) => {
    const handleVariationChange = (evt) => {
        changeAction(evt.target.value)
    }
    useEffect(() => {
        const inputs = document.querySelectorAll('.radio-buttons')
        const firstRadio = inputs[0]?.firstChild
        firstRadio && firstRadio.setAttribute('checked', 'true')
    }, [])
    return (
        <div className="radio-buttons">
            <input
                id={data.id}
                type="radio"
                name="variations"
                value={data.id}
                onChange={(evt) => handleVariationChange(evt)}
            />
            <label htmlFor={data.id}>
                <span>{data.selectedOptions[0].value}</span>
            </label>
        </div>
    )
}

export default memo(RadioSelect);