import { FaPlusSquare, FaMinusSquare } from 'react-icons/fa'
import Button from 'components/atoms/Button/Button'

const QuantityControls = ({ action, quantity }) => (
  <div className="flex items-center">
    <Button onClick={() => action('add')} config="svg">
      <span className="text-amber-800/70">
        <FaPlusSquare size={30}/>
      </span>
    </Button>
    
    <span className="text-xl font-semibold text-inherit">X{quantity}</span>
    <Button onClick={() => action('delete')} config="svg">
      <span className="text-amber-800/70 ">
        <FaMinusSquare size={30}/>
      </span>
    </Button>
    
  </div>
)

export default QuantityControls
