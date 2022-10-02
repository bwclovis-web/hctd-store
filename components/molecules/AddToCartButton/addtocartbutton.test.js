import "@testing-library/jest-dom"
import { render, fireEvent, screen } from "@testing-library/react"
import AddToCartButton from "./AddToCartButton"

describe("AddToCartButton", () => {
  it('should render an add to cart button', () => {
    render(<AddToCartButton />)
  })
})
