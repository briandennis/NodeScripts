var sackItems = require('./sackItems.js');
var items = sackItems.items;

function packSack(sackItems, packCapacity){
  var map = [];

  function opt (index, remainingCapacity){
    if(index >= sackItems.length || remainingCapacity <= 0) return 0;
    else{
      if(map[index] === undefined){
        map[index] = [];
      }
      else if(map[index][remainingCapacity]) return map[index][remainingCapacity];
      var best = Math.max(
        (sackItems[index][0] + opt(index + 1, remainingCapacity - sackItems[index][1])),
        opt(index + 1, remainingCapacity)
      );
      map[index][remainingCapacity] = best;
      console.log('returning ' + best + ' as best and remaining capacity is' + remainingCapacity + '...');
      return best;
    }
  }

  return opt(0, packCapacity);
}

console.log('Final value: ' + packSack(items, 10));
