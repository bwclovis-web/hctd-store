import { FC } from "react"
import classNames from "classnames"
import ProductCard from "../ProductCard/ProductCard"
import { DisplayGridI } from "./DisplayGridI"

const DisplayGrid: FC<DisplayGridI> = ({ data, cols, type, filter }) => {
    const GridClasses = classNames({
        'grid grid-cols-1 md:grid-cols-2 gap-4': true,
        'lg:grid-cols-4': cols === 4,
        'lg:grid-cols-5': cols === 5
    })

    return (
        <ul className={GridClasses}>
            {data?.map(item => {
                const filterType = item.node?.collections?.edges[0].node.handle
                if (filter && filter === filterType) {
                    return <ProductCard product={item} display={cols} key={item.node.id} type={type} />
                } else if (!filter) {
                    return <ProductCard product={item} display={cols} key={item.node.id} type={type} />
                }
            })}
        </ul>
    )
}

export default DisplayGrid;
