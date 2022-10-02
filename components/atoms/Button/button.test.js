import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import Button from "./Button"

describe("Button", () => {
  it('should render a button', () => {
    render(<Button />)
  })

  it('should switch types', () => {
    render(<Button type="submit"/>)
  })
})
