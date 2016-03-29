var imports = require('./exporter.js');
var list = imports.mergeList;


function quickSort(list){

  var lessList, greaterList = [];

  while(lessList.length < list.length/4 || greaterList.length < list.length/4){
    var pivotIndex = Math.floor(Math.random()*list.length-1);
    list.forEach(function(item, index){
      if(index !== pivotIndex){
        if(item < list[pivotIndex])
      }
    });
  }
}
