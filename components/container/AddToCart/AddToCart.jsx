import { useContext, useEffect, useState } from 'react'

import RadioSelect from '../../atoms/RadioButtons/RadioButtons'
import { getPriceByVariantId } from './utility'
import AddToCartButton from '../../molecules/AddToCartButton/AddToCartButton'
import ShopContext from '../../../provider/ShopProvider'

const AddToCart = ({ variant, availableForSale }) => {
    const [variationId, setVariationId] = useState(variant[0].node.id)
    const {setCartDisplayPrice, cartDisplayPrice} = useContext(ShopContext)

    useEffect(() => {
        variationId && setCartDisplayPrice(getPriceByVariantId(variant, variationId))
    }, [variationId])

    return (
        <div>
            <div className='flex gap-2 mb-4'>
                {
                    variant.map((item, i) => {
                        return variant.length > 1 && <RadioSelect data={item.node} key={i} changeAction={setVariationId} />
                    })
                }
            </div>
            <p className='font-display pt-4 pb-2 flex items-baseline'>
                <span className='text-4xl pr-2 '>Price: </span>
                <span className='text-5xl text-violet-600'>{cartDisplayPrice}</span>
            </p>
            <div className='my-4'>
                <AddToCartButton
                    varId={variationId}
                    available={availableForSale}
                />
            </div>
        </div>
    )

}

export default AddToCart;