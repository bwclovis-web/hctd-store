const Dropdown = ({ data, onChange, heading }) => <select onChange={onChange} className="bg-slate-100 w-2/5 p-4 text-xl uppercase rounded-lg appearance-none mb-10">
  <option value="">{heading}</option>
  {data.map(item => <option key={item} value={item} className="text-lg">{item.toUpperCase()}</option>)}
  <option value="" className="text-sm bg-slate-900 text-slate-100 text-center">RESET</option>
</select>

export default Dropdown
