import RadioButtons from "../../../atoms/RadioButtons/RadioButtons"

const SizeSelection = ({ data, action }) => {
  const [ jars, bags ] = data?.reduce((res, ele) => {
    const variation = ele.node.selectedOptions[0].value.toLowerCase()
    res[variation.includes('jar') ? 0 : 1].push(ele)

    return res
  }, [ [], [] ])

  return (
    <div className="flex flex-col">
      <div>
        <p className="text-slate-700 pb-2 text-base">Shipped in durable plastic bags.</p>
        <div className="flex">
          {
            bags.map((item, i) => <RadioButtons data={item.node} key={i} changeAction={action} />)
          }
        </div>
      </div>

      <div className="mt-3">
        <p className="text-slate-700 pb-2 text-base">Shipped in re-usable plastic jars.</p>
        <div className="flex">
          {
            jars.map((item, i) => <RadioButtons data={item.node} key={i} changeAction={action} />)
          }
        </div>
      </div>

    </div>
  )
}

export default SizeSelection
