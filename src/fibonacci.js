module.exports = function fib(n) {
  if (n == null || n < 0) return -1

  const fibNums = [0, 1]

  function fibHelper (n) {
    if (fibNums[n] != null) {
      return fibNums[n]
    } else {
      fibNums[n] = fibHelper(n - 1) + fibHelper(n - 2)
      return fibNums[n]
    }
  }

  return fibHelper(n)
}
