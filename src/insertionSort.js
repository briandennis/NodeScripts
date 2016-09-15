module.exports = (list, compare) => {
  if (!list || !list.length || !compare) return []

  const subSort = (index) => {
    const element = list[index]
    let currIndex = index - 1
    let positionFound = false

    while (!positionFound && currIndex >= 0) {
      if (compare(list[currIndex], element) <= 0) {
        positionFound = true
      } else {
        list[currIndex + 1] = list[currIndex]
        currIndex--
      }
    }
    list[currIndex + 1] = element
  }

  let index = 0

  while (index < list.length) {
    subSort(index)
    index++
  }

  return list
}






if (something) {
  let a = true
}

$(function() {

})

function something() {


}
