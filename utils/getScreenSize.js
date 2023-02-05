export const getScreenSize = () => {
  let screen = 'small'

  if(window.matchMedia("screen and (min-width: 1024px)").matches) {
    screen = "large"
  } else {
    screen = 'small'
  }

  console.log(`%c called`, 'background: #0047ab; color: #fff; padding: 2px:', screen)
  return screen
}
