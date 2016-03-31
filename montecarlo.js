var simNum = process.argv[2];

function runSim(){
  var x = Math.random();
  var y = Math.random();

  return Math.sqrt(x*x + y*y) < 1;
}


if(simNum >= 0){
  var successCount = 0;
  for(var i = 0; i < simNum; i++){
    if(runSim()) successCount++;
  }
  console.log('Pi = ' + (4*successCount/simNum));
}
else{
  console.log('Invalid number of simulations');
}
