module.exports = function (jobs) {

  if (!jobs) return -1
  if (!jobs.length) return 0

  jobs.sort((a, b) => a.end - b.end)
  let optimalValues = [];

  const nextCompatableJob = (index) => {
    for (let i = index - 1; i >= 0; i--) {
      if (jobs[i].end <= jobs[index].start) {
        return i
      }
    }
    return -1
  };

  const opt = (index) => {
    if (index < 0) return 0
    if (optimalValues[index] != null) return optimalValues[index]


    const includeIndex = jobs[index].weight + opt(nextCompatableJob(index))
    const doNotIncludeIndex = opt(index - 1)

    const optimalVal =  Math.max(includeIndex, doNotIncludeIndex)
    optimalValues[index] = optimalVal

    return optimalVal
  }

  return opt(jobs.length - 1)
}
