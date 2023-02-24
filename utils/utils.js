export const throttle = (func, limit) => {
  let inThrottle
  return (...args) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = setTimeout(() => inThrottle = false, limit)
    }
  }
}

export const renderKeywords = keywords => {
  const keywordArray = [{
    keywords 
  }]
  return keywordArray ? keywordArray : null
}

export const slugify = string => string.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
