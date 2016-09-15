module.exports = function quickSortFactory (pivotStrategy) {
  return function quickSort (list, compare) {
    if (!list || !list.length || !Array.isArray(list) || !compare) return []

    const partition = (list, low, high) => {
      high = high - 1

      // use provided pivot strategy
      let pivotIndex = pivotStrategy(list, low, high)

      // place pivot at end of search region
      const tmp = list[pivotIndex]
      list[pivotIndex] = list[high]
      list[high] = tmp

      let wall = low

      for (let index = low; index < pivotIndex; index++) {
        if (compare(list[index], list[pivotIndex]) < 0) {
          const tmp = list[index]
          list[index] = list[wall]
          list[wall] = tmp
          wall++
        }
      }

      const pivotValue = list[pivotIndex]
      list[pivotIndex] = list[wall]
      list[wall] = pivotValue

      return wall
    }

    const sortSection = (list, low, high) => {
      const diff = high - low

      if (diff === 1 || diff === 0) {
        return list
      } else {
        const pivot = partition(list, low, high)
        sortSection(list, low, pivot)
        sortSection(list, pivot + 1, high)
        return list
      }
    }

    return sortSection(list, 0, list.length)
  }
}
