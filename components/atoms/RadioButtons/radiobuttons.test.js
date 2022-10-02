import "@testing-library/jest-dom"
import { render, fireEvent, screen } from "@testing-library/react"
import RadioButtons from "./RadioButtons"

describe("RadioButtons", () => {
  const mockCallBack = jest.fn(() => 'meow')
  const mockProps = {
    id: '1',
    selectedOptions: [{ value: "bob" }],
    availableForSale: true
  }
  it('should render a radio button', () => {
    render(<RadioButtons data={mockProps}/>)
  })

  it('should handle a call back', () => {
    render(<RadioButtons data={mockProps} changeAction={mockCallBack}/>)
    const input = screen.getByLabelText('bob')
    fireEvent.click(input)
    expect(mockCallBack()).toBe('meow')
    expect(mockCallBack).toBeCalled()
  })

  // it('should handle disabled', () => {
  //   const newMockProps = {
  //     id: '1',
  //     selectedOptions: [{ value: "bob" }],
  //     availableForSale: false
  //   }
  //   render(<RadioButtons data={newMockProps} changeAction={mockCallBack}/>)
  //   const disabledText = screen.getByDisplayValue('1')
  //   fireEvent.click(disabledText)
  //   expect(mockCallBack).toBeCalledTimes(0)
  // })
})
