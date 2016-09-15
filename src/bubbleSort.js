module.exports = function (list, compare) {
  if (!list || !list.length || !compare) return []

  let index = 0
  let inversionFound = true

  while (inversionFound || index >= list.length) {
    inversionFound = false

    for (let i = index; i < list.length - 1; i++) {
      if (list[i + 1] && compare(list[i], list[i + 1]) > 0) {
        inversionFound = true
        const tmp = list[i + 1]
        list[i + 1] = list[i]
        list[i] = tmp
      }
    }

    index++
  }

  return list
}
