import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import Dropdown from "./Dropdown"
const dropdownMockData = [ 'red', 'blue', 'green' ]

describe("Dropdown", () => {
  it('should render a dropdown', () => {
    render(<Dropdown data={dropdownMockData}/>)
  })
})
