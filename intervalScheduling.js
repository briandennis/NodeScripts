var importModule = require('./exporter.js');
var intervals = importModule.intervals;

function maxSchedule(intervalSet){
  intervalSet.sort(function(a,b){
    return a[1] - b[1];
  });
  var maxSet = [];
  var currentItem = intervalSet.shift();
  maxSet.push(currentItem);
  while(intervalSet.length > 0){
    currentItem = intervalSet.shift();
    if(currentItem[0] > maxSet[maxSet.length - 1][1]){
      maxSet.push(currentItem);
    }
  }
  return maxSet;
}

console.log(maxSchedule(intervals));
