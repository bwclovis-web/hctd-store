const Dropdown = ({ data, onChange }) => {
  console.log(data)
  return <select onChange={onChange} className="bg-blue-300 w-1/5 p-4 text-xl uppercase rounded-lg appearance-none">
    <option value="">Filter By Color</option>
    {data.map(item => <option key={item} value={item} className="text-lg">{item.toUpperCase()}</option>)}
    <option value="" className="text-sm bg-slate-900 text-slate-100 text-center">RESET</option>
  </select>
}

export default Dropdown
