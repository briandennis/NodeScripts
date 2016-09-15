module.exports = function (startNode, element) {
  if (!startNode || !element) return null

  const stack = []
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
          stack.push(child)
        })
      return false
    }
  }

  stack.push(startNode)

  while (stack.length) {
    if (processNode(stack.pop())) {
      break
    }
  }

  return foundNode
}
