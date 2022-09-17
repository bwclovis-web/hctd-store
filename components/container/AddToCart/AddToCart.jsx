import { useContext, useEffect, useState } from 'react'


import { getPriceByVariantId } from './utility'
import ShopContext from 'provider/ShopProvider'
import RadioButtons from 'components/atoms/RadioButtons/RadioButtons'
import AddToCartButton from 'components/molecules/AddToCartButton/AddToCartButton'

const AddToCart = ({ variant, availableForSale }) => {
  const [ variationId, setVariationId ] = useState(variant[0].node.id)
  const { setCartDisplayPrice, cartDisplayPrice } = useContext(ShopContext)

  useEffect(() => {
    console.log(getPriceByVariantId(variant, variationId))
    variationId && setCartDisplayPrice(getPriceByVariantId(variant, variationId))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variationId])

  return (
    <div className="mt-8 mb-6 pt-8 border-t-2 border-indigo-400">
      <div className="flex flex-col justify-between items-start lg:items-center lg:flex-row">
        <p className="font-display pb-3.5 flex items-start">
          <span className="text-3xl pr-2">Price: </span>
          <span className="text-6xl text-indigo-900" aria-live="polite">
            {cartDisplayPrice}
          </span>
        </p>
        <div className="flex gap-2 mb-4 lg:mb-10">
          {
            variant.map((item, i) => variant.length > 1 && <RadioButtons data={item.node} key={i} changeAction={setVariationId} />)
          }
        </div>
      </div>
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
