module.exports = function (numRounds) {

  if (numRounds == undefined || numRounds <= 0) return -1

  let total = 0
  let success = 0

  const iterate = () => {
    total++

    const x = Math.random()
    const y = Math.random()

    if ( (x*x + y*y) < 1 ) {
      success++
    }
  }

  while (numRounds > 0) {
    iterate()
    numRounds--
  }

  return 4 * (success / total)
}
