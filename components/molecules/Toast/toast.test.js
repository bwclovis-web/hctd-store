import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import Toast from "./Toast"



describe("<Toast>", () => {
  const mockData = {
    title: "cat"
  }
  it('should create tag list', () => {
    render(<Toast item={mockData}/>)
  })
})
