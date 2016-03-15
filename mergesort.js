function compareInts(a,b){
  return a-b;
}


var arg = [1,4,2,6,4,7,5,2,9];


function mergeSort (list, comparisonFunction){

  var left;
  var right;

  if(list.length <= 1){
    return list;
  }
  else{
    left = mergeSort(list.slice(0,list.length/2), comparisonFunction);
    right = mergeSort(list.slice(list.length/2, list.length), comparisonFunction);
  }

  var i = 0;
  var j = 0;
  var returnList = [];
  var notDone = true;

  while(notDone){
    if(i >= left.length){
      returnList = returnList.concat(right.slice(j,right.length));
      notDone = false;
    }
    else if(j >= right.length){
      returnList = returnList.concat(left.slice(i,left.length));
      notDone = false;
    }
    else{
      if(comparisonFunction(left[i],right[j]) < 0){
        returnList.push(left[i]);
        i++;
      }
      else{
        returnList.push(right[j]);
        j++;
      }
    }
  }
   console.log(returnList);
  return returnList;
}

console.log(mergeSort(arg, compareInts));
