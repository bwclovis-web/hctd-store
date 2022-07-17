import ShoppingCartButton from "../ShoppingCartButton/ShoppingCartButton"

const UtilNav = () => (
    <div className='flex justify-between border-b-2 border-blue-400 items-center py-1 px-2'>
        <a href="#main" className="bg-blue-100 p-2 opacity-0 focus:opacity-100 text-lg">skip to main</a>
        <div>
            <ShoppingCartButton />
        </div>
    </div>
)

export default UtilNav