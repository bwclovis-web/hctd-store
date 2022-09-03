import { FaPlusSquare, FaMinusSquare } from 'react-icons/fa'
import Button from 'components/atoms/Button/Button'

const QuantityControls = ({ action, quantity }) => (
  <div className="flex items-center ml-10">
    <Button onClick={() => action('delete')} config="svg">
      <span className="text-amber-800/70 ">
        <FaMinusSquare size={40}/>
      </span>
    </Button>
    <span className="text-2xl px-2 font-semibold">{quantity}</span>
    <Button onClick={() => action('add')} config="svg">
      <span className="text-amber-800/70 block">
        <FaPlusSquare size={40}/>
      </span>
    </Button>
  </div>
)

export default QuantityControls
