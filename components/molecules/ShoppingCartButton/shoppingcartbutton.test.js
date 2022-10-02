import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import ShoppingCartButton from "./ShoppingCartButton"
describe("<ShoppingCartButton>", () => {
  it('should render shopping cart button', () => {
    render(<ShoppingCartButton />)
  })
})
