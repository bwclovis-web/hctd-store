import classNames from "classnames"
import ProductCard from "../ProductCard/ProductCard"

const DisplayGrid = ({ data, cols, type, title }) => {
    const GridClasses = classNames({
        'grid grid-cols-1 md:grid-cols-2 gap-4': true,
        'lg:grid-cols-4': cols === 4,
        'lg:grid-cols-5': cols === 5
    })

    if(!data.length) {
        return
    }

    return (
        <>
            {title ? <h2 className='font-display text-h2-dynamic capitalize'>{title}</h2> : null}
            <ul className={GridClasses}>
                {data?.map((item ,i) => {
                    return <ProductCard product={item} display={cols} key={item.node.id} type={type} />
                })}
            </ul>
        </>
    )
}

export default DisplayGrid;
