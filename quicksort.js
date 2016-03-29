var imports = require('./exporter.js');
var list = imports.mergeList;


function quickSort(list){

  function partition(start, end){

    console.log("STARTING SWAP from " + start + " to " + end-1 +  "\n");

    //pick pivot
    var pivotIndex = start;
    var partitionLength = end - start;

    //return if base
    if(partitionLength <= 1) return list;

    while(pivotIndex > partitionLength/4 + partitionLength/2 || pivotIndex < partitionLength/4){
      pivotIndex = Math.floor(Math.random()*list.length-1);
    }
    console.log('pivot index: ' + pivotIndex);

    var pivotVal = list[pivotIndex];
    var right = end-1, left = start;


    //swap pivot
    list[pivotIndex] = list[right];
    list[right] = pivotVal;

    console.log("STARTING SWAP from " + left + " to " + right +  "\n");
    //swap until done
    while(left < right){
      if(list[left] > pivotVal){
        var tmp = list[right];
        list[right] = list[left];
        list[left] = tmp;
        right--;
      }
      else{
        left++;
      }
    }

    if(list[left] >= pivotVal){
      list[end-1] = list[left];
      list[left] = pivotVal;
    }
    else if(left + 1 < end-1){
      list[end-1] = list[left+1];
      list[left+1] = pivotVal;
    }

    console.log(list);

    partition(start,left);
    partition(left+1,end);

    return list;
  }

  return partition(0, list.length);
}

console.log(quickSort(list));
