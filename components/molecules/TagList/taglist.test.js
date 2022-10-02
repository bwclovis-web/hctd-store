import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import TagList from "./TagList"

describe("<TagList>", () => {
  const mockData = [ 'one', 'two' ]
  it('should create tag list', () => {
    render(<TagList data={mockData}/>)
  })
})
