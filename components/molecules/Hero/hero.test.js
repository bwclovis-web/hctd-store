import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import HeroComponent from "./Hero"

describe("<HeroComponent>", () => {
  const mockHeroData = {
    eyebrow: "oh hai",
    heading: "Sup Dawg",
    heroImage: {
      asset: {
        metadata: {
          lqip: "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAJABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAYA/8QAJRAAAAYABgEFAAAAAAAAAAAAAAECAwQFBhIhMjVhERRxcoKx/8QAFQEBAQAAAAAAAAAAAAAAAAAABAX/xAAcEQABBAMBAAAAAAAAAAAAAAABAAIDIQQREkH/2gAMAwEAAhEDEQA/ACWNfaVrHrY9eiMw+ovKUFqXR9C1o8WlFrmohMSI0plObbmJZ9ikxNxsv6gFHyzvxT+BMWng9eKhhiOaM9tsKzr0s2sCPMfbyOuoI1JPTUYITsR7DCa59nSCXXS//9k="
        }
      }
    }
  }
  it('should render a Hero Component', () => {
    render(<HeroComponent {...mockHeroData}/>)
  })
})
