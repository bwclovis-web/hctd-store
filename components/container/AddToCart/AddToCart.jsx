import { useContext, useEffect, useState } from 'react'


import { getPriceByVariantId } from './utility'
import ShopContext from 'provider/ShopProvider'
import RadioButtons from 'components/atoms/RadioButtons/RadioButtons'
import AddToCartButton from 'components/molecules/AddToCartButton/AddToCartButton'
import SizeSelection from './Bones/SizeSelector'

const AddToCart = ({ variant, availableForSale }) => {
  const [ variationId, setVariationId ] = useState(variant[0].node.id)
  const { setCartDisplayPrice, cartDisplayPrice } = useContext(ShopContext)

  useEffect(() => {
    setVariationId(variant[0].node.id)
  }, [variant[0].node.id])

  useEffect(() => {
    variationId && setCartDisplayPrice(getPriceByVariantId(variant, variationId))
  }, [variationId])

  return (
    <div className="mt-8 mb-6 pt-10 border-t-2 border-indigo-400">
      <div className="flex flex-col justify-between items-start lg:flex-row">
        <p className="font-display pb-3.5 flex items-start">
          <span className="text-3xl pr-2">Price: </span>
          <span className="text-6xl text-indigo-800" aria-live="polite">
            {cartDisplayPrice}
          </span>
        </p>
        <div className="flex gap-2 mb-4 lg:mb-10">
          {variant.length > 1 && <SizeSelection data={variant} action={setVariationId} />}
        </div>
      </div>
      <div className="mt-1">
        <AddToCartButton
          varId={variationId}
          available={availableForSale}
        />
      </div>
    </div>
  )
}

export default AddToCart
