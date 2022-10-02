import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import Input from "./Input"


describe("Input", () => {
  it('should render a input', () => {
    render(<Input />)
  })

  it('should render a text area', () => {
    render(<Input type="textArea"/>)
  })
})
