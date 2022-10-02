import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import HeroComponent from "./Hero"

describe("<HeroComponent>", () => {
  it('should render a Hero Component', () => {
    render(<HeroComponent src={`/images/home.jpg`} title="About Happy Cat Tie Dye" heading="Meet the founder"/>)
  })
})
