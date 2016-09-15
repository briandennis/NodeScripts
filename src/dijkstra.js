module.exports = function (priorityQueue) {
  return (startNode, target) => {
      if (!node || element == null) return null

      const visited = new Map()
      let found = false
      let curr = startNode

      while (!found && curr) {
        if curr.value = target {
          found = true
          break
        } else {
          curr.children.forEach( (element) => {
            if ( !visited.has(element) ) {
              priorityQueue.insert(element, element.value)
            }
          })
        }
      }
  }
}
