import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import CustomerProfileButton from "./CustomerProfileButton"

describe("CustomerProfileButton", () => {
  it('should render a CustomerProfileButton', () => {
    render(<CustomerProfileButton />)
  })
})
