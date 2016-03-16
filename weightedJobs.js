var jobs = require('./exporter.js').weightedJobs;


function compareJobs(a,b){
  return a.end - b.end;
}

function optimalJobs(jobList, compareFunc){

  jobList = jobList.sort(compareFunc);
  var optValues = [];
  optValues[0] = 0;

  for(i = 1; i <= jobList.length; i++){
    var prevIndex;
    for(j = i-1; j > 0; j--){
      if(jobList[j].end <= jobList[i-1].start){
        prevIndex = j;
        console.log('Prev found!');
        break;
      }
    }
    if(prevIndex === undefined) prevIndex = 0;
    optValues[i] = Math.max(
      jobList[i-1].value + optValues[prevIndex],
      i > 1 ? jobList[i-2] : 0
    );
  }

  return optValues[1];
}

console.log(optimalJobs(jobs, compareJobs));
