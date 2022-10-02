import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import SiteSeo from "./SiteSeo"


describe("<SiteSeo>", () => {
  const mockData = {
    title: "bob",
    description: "meow"
  }
  it('should handle seo data', () => {
    render(<SiteSeo data={mockData}/>)
  })
})
