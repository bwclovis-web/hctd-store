export const getUrlStructure = config => {
  const urlConfigs = { href: '', to: '' }
  if (config === 'cat') {
    urlConfigs.href === `/shop/category/[slug]`
  }
}

export const getImageUrl = item => {
  let url
  if (item.featuredImage) {
    url = item.featuredImage.url
  } else if (item.image) {
    url = item.image.url
  } else {
    url = ''
  }

  return url
}
