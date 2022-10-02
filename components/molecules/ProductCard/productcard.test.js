import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import ProductCard from "./ProductCard"

describe("<ProductCard>", () => {
  const testProps = {
    product: {
      node: {
        featuredImage: {
          url: 'https://cdn.shopify.com/s/files/1/0620/2831/6893/products/20220801_181251.jpg?v=1663368980'
        },
        availableForSale: true,
        title: "bob",
        priceRange: {
          maxVariantPrice: {
            amount: "90.0"
          },
          minVariantPrice: {
            amount: "40.0"
          }
        }
      }
    }
  }
  it('should render a Product Card', () => {
    render(<ProductCard product={testProps.product} />)
  })
})
