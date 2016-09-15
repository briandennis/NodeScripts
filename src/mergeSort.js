module.exports = function mergeSort (list, compare) {
  if (!list.length || !Array.isArray(list) || !compare) return []
  if (list.length === 1) return list

  const middle = Math.floor(list.length / 2)
  let leftList = list.slice(0, middle)
  let rightList = list.slice(middle)

  const sortedLeft = mergeSort(leftList, compare)
  const sortedRight = mergeSort(rightList, compare)

  let leftPointer = 0
  let rightPointer = 0
  let sortedFull = []

  while (leftPointer < sortedLeft.length || rightPointer < sortedRight.length) {
    if (leftPointer >= sortedLeft.length) {
      sortedFull = [...sortedFull, ...sortedRight.slice(rightPointer)]
      break
    } else if (rightPointer >= sortedRight.length) {
      sortedFull = [...sortedFull, ...sortedLeft.slice(leftPointer)]
      break
    } else {
      if (compare(sortedLeft[leftPointer], sortedRight[rightPointer]) < 0) {
        sortedFull.push(sortedLeft[leftPointer])
        leftPointer++
      } else {
        sortedFull.push(sortedRight[rightPointer])
        rightPointer++
      }
    }
  }

  return sortedFull
}
