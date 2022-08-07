import { useContext, useEffect, useState } from 'react'


import { getPriceByVariantId } from './utility'
import ShopContext from 'provider/ShopProvider'
import RadioButtons from 'components/atoms/RadioButtons/RadioButtons'
import AddToCartButton from 'components/molecules/AddToCartButton/AddToCartButton'

const AddToCart = ({ variant, availableForSale }) => {
  const [ variationId, setVariationId ] = useState(variant[0].node.id)
  const { setCartDisplayPrice, cartDisplayPrice } = useContext(ShopContext)

  useEffect(() => {
    variationId && setCartDisplayPrice(getPriceByVariantId(variant, variationId))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variationId])

  return (
    <div>
      <div className="flex gap-2 my-4">
        {
          variant.map((item, i) => variant.length > 1 && <RadioButtons data={item.node} key={i} changeAction={setVariationId} />)
        }
      </div>
      <p className="font-display pt-4 pb-2 flex items-start">
        <span className="text-3xl pr-2">Price: </span>
        <span className="text-5xl text-indigo-900">{cartDisplayPrice}</span>
      </p>
      <div className="my-4">
        <AddToCartButton
          varId={variationId}
          available={availableForSale}
        />
      </div>
    </div>
  )
}

export default AddToCart
