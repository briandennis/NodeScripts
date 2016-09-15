![Travis Status](https://travis-ci.org/briandennis/An-Algo-a-Day.svg?branch=master)

# Node Scripts

An open source implementation of basic algorithms in JavaScript. Developed as a resource to help those beginning to learn formal computer science who come from a JavaScript background.
## Sorting

### BubbleSort

``` bubbleSort(list, compare) ```

Where list is an ```array``` and compare is a ```function``` that operates the same way as the compare function in [Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).

Returns an empty array if ```list``` is not an ```array``` or if ```compare``` is not supplied.

### MergeSort

``` mergeSort(list, compare) ```

Where list is an ```array``` and compare is a ```function``` that operates the same way as the compare function in [Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).

Returns an empty array if ```list``` is not an ```array``` or if ```compare``` is not supplied.

### QuickSort

``` quickSortFactory(pivotStrategy) ```

Factory function that takes a [pivot strategy](https://en.wikipedia.org/wiki/Quicksort#Algorithm) ``` function ```.

The pivot strategy function should have the following signature:

``` pivotStrategy(list, low, high) ```

Where ```list``` is an array and low/high are of type ```number``` and indicate the range for selecting a pivot within list (inclusive). The function should return the index of the pivot element and should not alter ```list```.

For convenience, several pivot strategies are included in the utility module. See the test module for example usage.

Returns a quick sort implementation that uses the specified pivot strategy.

```quickSort(list, compare)```

Where list is an ```array``` and compare is a ```function``` that operates the same way as the compare function in [Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).

Returns an empty array if ```list``` is not an ```array``` or if ```compare``` is not supplied.

## Search

### Binary Search

``` binarySearch(list, element, compare) ```

Where ``` list ``` is an ``` array ``` to be searched, ``` element ``` is the element to be searched for in ``` list ```, and ``` compare ``` is a ``` function ``` that operates the same way as the compare function in [Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).

Returns the index that ```element ``` is found at and ``` -1 ``` if ``` element ``` is not found.

Returns ```-1``` if ``` list ``` is not passed or is not an ```array```, or if ``` element ``` or ``` compare ``` are not passed.

### Depth First Search

``` depthFirstSearch(node, element) ```

Where ```node``` is a graph node with 2 properties:

1. ```value``` - the value of the node
2. ```children``` - an array of child nodes

and ``` element ``` is the value to be searched for.

### Breadth First Search

``` breadthFirstSearch(node, element) ```

Where ```node``` is a graph node with 2 properties:

1. ```value``` - the value of the node
2. ```children``` - an array of child nodes

and ``` element ``` is the value to be searched for.

## Dynamic Programming

### Fibonacci

``` fib(n) ```

Where ```n ``` is a ```number```.

Returns the nth fibonacci number or ```-1``` if ```n``` is ```< 0``` or not passed.

### Weighted Interval/Job Scheduling

``` weightedIntervalScheduling(jobs) ```

Where ```jobs``` is an ``` array``` of jobs such that each job is an object with the following properties:

- ```start``` - number, start time of the job
- ```end``` - number, end time of the job
- ```weight``` - number, value of the job

An example jobs array is provided in the utility module. See test module for example use.

## Random Algorithms

### Monte Carlo Pi Approximation

``` piApprox(numRounds) ```

Where `numRounds` is a `number` indicating the number of iterations in the [Monte Carlo approximation](https://en.wikipedia.org/wiki/Monte_Carlo_method).

Returns a `number` with the value of the pi approximation.
