import { keyCodes } from "./keycodes"

const handleTabBack = (evt, focusSelectors) => {
  if (evt.target === focusSelectors.first) {
    evt.preventDefault()
    focusSelectors.last.focus()
  }  
}

const handleTabForward = (evt, focusSelectors) => {
  if (evt.target === focusSelectors.last) {
    evt.preventDefault()
    focusSelectors.first.focus()
  } 
}

const handleKeyDown = (evt, focusSelectors) => {
  const { allFocusElements } = focusSelectors
  const keycode = evt.keyCode || evt.which
  switch (keycode) {
  case keyCodes.tab:
    if (allFocusElements.length === 1) {
      evt.preventDefault()
      break
    }
    if (evt.shiftKey) {
      handleTabBack(evt, focusSelectors)
    } else {
      handleTabForward(evt, focusSelectors)
    }
    break
  default:
    break
  }  
}

export const focusElements = (element, trigger) => {
  const findFocusableElements = Array.from(element.querySelectorAll('button, [href], input, select, textarea, a, [tabindex="-1"]'))
  const focusElementsObj = {
    first: findFocusableElements[0],
    last: findFocusableElements[findFocusableElements.length - 1],
    allFocusElements: findFocusableElements
  }

  if (trigger) {
    focusElementsObj.allFocusElements.forEach(ele => {
      ele.setAttribute('tabindex', '-1')
    })
  } else {
    focusElementsObj.allFocusElements.forEach(ele => {
      ele.setAttribute('tabindex', '0')
    })
  }

  focusElementsObj.first.focus()

  return focusElementsObj
}

export const setFocusTrap = (element, trigger) => {
  const focusSelectors = focusElements(element, trigger)

  focusSelectors.allFocusElements.forEach(selector => {
    selector.onkeydown = evt => handleKeyDown(evt, focusSelectors)
  })
}
