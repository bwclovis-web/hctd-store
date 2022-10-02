import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import MainNavigation from "./MainNavigation"
describe("<MainNavigation>", () => {
  it('should render main navigation', () => {
    render(<MainNavigation />)
  })
})
