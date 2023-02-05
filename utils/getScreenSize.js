export const getScreenSize = () => {
  let screen = 'small'

  if(window.matchMedia("screen and (min-width: 1024px)").matches) {
    screen = "large"
  } else {
    screen = 'small'
  }
  return screen
}
