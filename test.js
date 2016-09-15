const expect = require('expect')
const util = require('./util')

// Sorting

const sortNumbers = (a, b) => a - b

// MergeSort
const mergeSort = require('./src/mergeSort')

let list = [1, 4, 2, 8, 5, 9, 7, 3, 2]
let listSorted = [1, 2, 2, 3, 4, 5, 7, 8, 9]

// Error and Edge Cases
expect(mergeSort(false)).toEqual([])
expect(mergeSort([])).toEqual([])
expect(mergeSort(list)).toEqual([])

// Test Case
list = [1, 4, 2, 8, 5, 9, 7, 3, 2]
expect(mergeSort(list, sortNumbers)).toEqual(listSorted)

// InsertionSort
const insertionSort = require('./src/insertionSort')

// Error and Edge Cases
expect(insertionSort(false)).toEqual([])
expect(insertionSort([])).toEqual([])
expect(insertionSort(list)).toEqual([])

// Test Case
list = [1, 4, 2, 8, 5, 9, 7, 3, 2]
expect(insertionSort(list, sortNumbers)).toEqual(listSorted)

// QuickSort
const quickSortFactory = require('./src/quickSort')

const pivotStrategies = util.pivotStrategies
const quickSortLastElementStrategy = quickSortFactory(pivotStrategies.lastElement)
const quickSortMiddleOfThree = quickSortFactory(pivotStrategies.middleOfThree)
const quickSortRandom = quickSortFactory(pivotStrategies.random)

// Error and Edge Cases
expect(quickSortLastElementStrategy(false)).toEqual([])
expect(quickSortLastElementStrategy([])).toEqual([])
expect(quickSortLastElementStrategy(list)).toEqual([])

expect(quickSortMiddleOfThree(false)).toEqual([])
expect(quickSortMiddleOfThree([])).toEqual([])
expect(quickSortMiddleOfThree(list)).toEqual([])

// Test Cases
list = [1, 4, 2, 8, 5, 9, 7, 3, 2]
expect(quickSortLastElementStrategy(list, sortNumbers)).toEqual(list.sort())

list = [1, 4, 2, 8, 5, 9, 7, 3, 2]
expect(quickSortMiddleOfThree(list, sortNumbers)).toEqual(list.sort())

list = [1, 4, 2, 8, 5, 9, 7, 3, 2]
expect(quickSortRandom(list, sortNumbers)).toEqual(list.sort())

// Bubble Sort
const bubbleSort = require('./src/bubbleSort')

// Error and Edge Casses
expect(bubbleSort(false)).toEqual([])
expect(bubbleSort([], sortNumbers)).toEqual([])
expect(bubbleSort([1, 2, 3])).toEqual([])

// Test Cases
list = [1, 4, 2, 8, 5, 9, 7, 3, 2]
expect(bubbleSort(list, sortNumbers)).toEqual(list.sort())

// Binary Search
const binarySearch = require('./src/binarySearch')

// Error and Edge Cases
expect(binarySearch()).toEqual(-1)
expect(binarySearch([])).toEqual(-1)
expect(binarySearch([], 2)).toEqual(-1)

// Test Cases
list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
expect(binarySearch(list, 4, sortNumbers)).toEqual(3)
expect(binarySearch(list, 8, sortNumbers)).toEqual(7)
expect(binarySearch([2], 2, sortNumbers)).toEqual(0)

// Depth First Search
const Tree = util.tree.Tree
const Node = util.tree.Node
const depthFirstSearch = require('./src/depthFirstSearch')

const childNode1 = new Node(9)
const childNode2 = new Node(1)
const childNode3 = new Node(8)

const node1 = new Node(3, [childNode1, childNode2])
const node2 = new Node(4)
const node3 = new Node(7, [childNode3])

const rootNode = new Node(5, [node1, node2, node3])

const tree = new Tree(rootNode)

// Error and Edge Cases
expect(depthFirstSearch(null, 4)).toEqual(null)
expect(depthFirstSearch(rootNode)).toEqual(null)

// Test Cases
expect(depthFirstSearch(tree.root, 5)).toEqual(rootNode)
expect(depthFirstSearch(tree.root, 4)).toEqual(node2)
expect(depthFirstSearch(tree.root, 8)).toEqual(childNode3)

// Breadth First Search
const breadthFirstSearch = require('./src/breadthFirstSearch')

// Error and Edge Cases
expect(breadthFirstSearch(null, 4)).toEqual(null)
expect(breadthFirstSearch(rootNode)).toEqual(null)

// Test Cases
expect(breadthFirstSearch(tree.root, 5)).toEqual(rootNode)
expect(breadthFirstSearch(tree.root, 4)).toEqual(node2)
expect(breadthFirstSearch(tree.root, 8)).toEqual(childNode3)

// Fibonacci
const fibonacci = require('./src/fibonacci')

// Error and Edge Cases
expect(fibonacci(0)).toEqual(0)
expect(fibonacci(1)).toEqual(1)
expect(fibonacci(-3838)).toEqual(-1)

// Test Cases
expect(fibonacci(42)).toEqual(267914296)

// Weighted Job Scheduling
const scheduleJobs = require('./src/weightedIntervalScheduling')

// Error and Edge Cases
expect(scheduleJobs()).toEqual(-1)
expect(scheduleJobs([])).toEqual(0)

// Test Cases
const jobs = util.jobs
expect(scheduleJobs(jobs)).toEqual(19)

// Random Algorithms

// Montecarlo Pi Approx
const piApprox = require('./src/montecarloPiApprox');

// Error and Edge Cases
expect(piApprox()).toEqual(-1)
expect(piApprox(-1)).toEqual(-1)
expect(piApprox(0)).toEqual(-1)

// Test Cases
expect(Math.abs(piApprox(500) - 3.1415)).toBeLessThanOrEqualTo(.1)
expect(Math.abs(piApprox(100000) - 3.1415)).toBeLessThanOrEqualTo(.01)
