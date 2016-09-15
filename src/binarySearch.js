module.exports = function (list, element, compare) {
  if(!list || !element || !compare) return -1

  helper = (list, low, high) => {
    if (high <= low) return -1

    const middle = Math.floor((high - low) / 2 ) + low
    const comparisonValue = compare(list[middle], element);

    if (comparisonValue === 0) {
      return middle
    } else if (comparisonValue < 0) {
      return helper(list, middle + 1, high)
    } else {
      return helper(list, low, middle)
    }
  }

  return helper(list, 0, list.length)
}
