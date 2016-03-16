function countInversions(list){
  if(list.length <= 1){
    return 0;
  }
  else{

    var left = countInversions(list.slice(0,list.length/2));
    var right = countInversions(list.slice(list.length/2, list.length));

    var leftList = left.list;
    var rightList = right.list;

    var i, j = 0;
    var done = false;

    while(!done){

    }
  }
}
