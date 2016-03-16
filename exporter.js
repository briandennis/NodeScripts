//Trying to keep data seperate from the implimentation!

var exports = module.exports = {};

// [value, weight]
exports.sackItems = [[1,5],[2,7],[1,3],[3,6]];

//inervals, used for inerval scheduling app
exports.intervals = [[0,3],[5,9],[0,5],[2,4],[7,9],[9,14],[10,11],[3,6],[7,8],[12,15]];

//list for merge sort
exports.mergeList = [1,4,2,6,4,7,5,2,9];

//list of weighted jobs of form {start, end, weight}
exports.weightedJobs = [{start: 1, end: 2, value: 1},{start: 2, end: 5, value: 9},{start: 1, end: 3, value: 5},{start: 5, end: 6,value: 7},{start: 4, end: 9, value: 6}];
