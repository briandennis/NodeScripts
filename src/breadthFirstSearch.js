module.exports = function (startNode, element) {
  if (!startNode || !element) return null

  const queue = []
  const discovered = new Map()
  let foundNode = null

  const processNode = (node) => {
    if (node.value === element) {
      foundNode = node
      return true
    } else {
      node.children
        .filter((child) => {
          return !discovered.get(child)
        })
        .forEach((child) => {
          discovered.set(child, true)
          queue.push(child)
        })
      return false
    }
  }

  queue.push(startNode)

  while (queue.length) {
    if (processNode(queue.shift())) {
      break
    }
  }

  return foundNode
}
