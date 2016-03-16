var jobs = require('./exporter.js').weightedJobs;


function compareJobs(a,b){
  return a.end - b.end;
}

function optimalJobs(jobList, compareFunc){

  jobList = jobList.sort(compareFunc);


}
