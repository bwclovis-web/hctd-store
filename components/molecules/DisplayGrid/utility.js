export const getAllTags = data => {
  let allTags = []
  data.forEach(item => {
    if (item.node.tags) {
      allTags.push(...item.node.tags)
    }
  })

  return Array.from(new Set(allTags))
}
