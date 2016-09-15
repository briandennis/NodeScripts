module.exports = {
  pivotStrategies: {
    lastElement: (list, low, high) => high,

    middleOfThree: (list, low, high) => {
      const middle = Math.floor((high - low) / 2) + low

      const elements = [
        { index: low, value: list[low] },
        { index: middle, value: list[middle] },
        { index: high, value: list[high] }
      ]

      elements.sort()

      return elements[1].index
    },

    random: (list, low, high) => Math.floor((Math.random() * (high - low)) + low)
  },
  tree: {
    Tree: class {
      constructor (rootNode) {
        this.root = rootNode || null
      }
    },
    Node: class {
      constructor (value, children) {
        this.value = value
        this.children = children || []
      }
    }
  },
  jobs: [
    { start: 0, end: 3, weight: 4 },
    { start: 1, end: 4, weight: 2 },
    { start: 2, end: 7, weight: 6 },
    { start: 3, end: 5, weight: 4 },
    { start: 4, end: 7, weight: 2 },
    { start: 5, end: 9, weight: 10 },
    { start: 6, end: 8, weight: 4 },
    { start: 7, end: 9, weight: 3 },
    { start: 10, end: 12, weight: 1 }
  ],
  PriorityQueue: class {

    constructor () {
      this.list = []
    }

    sort () {
      this.list.sort( (a,b) => a.value - b.value )
    }

    insert (element, value, data) {
      this.list.push({ element, value, data })
      this.sort()
    }

    update (element, value) {
      this.list[this.list.indexOf(element)].value = value
      this.sort()
    }

    pop () {
      this.list.shift()
    }
  }
}
