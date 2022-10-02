import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import DisplayGrid from "./DisplayGrid"

describe("<DisplayGrid>", () => {
  it('should render a DisplayGrid', () => {
    render(<DisplayGrid data=""/>)
  })
})
