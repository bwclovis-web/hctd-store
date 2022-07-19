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

    console.log(cartDisplayPrice)

    return (
        <div>
            <div className='flex gap-2 mb-4'>
                {
                    variant.map((item, i) => {
                        return variant.length > 1 && <RadioSelect data={item.node} key={i} changeAction={setVariationId} />
                    })
                }
            </div>
            <span className='text-xl font-semibold'>{cartDisplayPrice}</span>
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