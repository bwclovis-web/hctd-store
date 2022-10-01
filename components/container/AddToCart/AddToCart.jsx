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
    <section className="mt-8 mb-6 pt-10 border-t-2 border-indigo-400 flex flex-col md:flex-row lg:flex-col xl:flex-row justify-between">
      <div className="flex flex-col">
        <p className="font-display pb-3.5 flex items-start">
          <span className="text-3xl pr-2">Price: </span>
          <span className="text-8xl text-indigo-800" aria-live="polite">
            {cartDisplayPrice}
          </span>
        </p>
        <div className="my-4">
          <AddToCartButton
            varId={variationId}
            available={availableForSale}
          />
        </div>
      </div>

      <div className="flex flex-col">
        {variant.length > 1 && <SizeSelection data={variant} action={setVariationId} />}
      </div>
      
    </section>
  )
}

export default AddToCart
