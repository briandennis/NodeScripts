// Edit distance algorithm using dynamic programming to solve in O( |x| |y| )
// Practice during 577 Algorithms

var x = process.argv[2];
var y = process.argv[3];

var matrix = [];

function isSame (a,b){
  return x[a-1] === y[b-1] ? 0 : 1;
}

for (var i = 0; i <= x.length; i++){
  matrix[i] = [];
  for(var j = 0; j <= y.length ; j++){

      if(i === 0){
        matrix[i][j] = j;
      }
      else if(j === 0){
        matrix[i][j] = i;
      }
      else{
        matrix[i][j] = Math.min(
          (matrix[i-1][j-1] + isSame(i,j)),
          (matrix[i-1][j] + 1),
          (matrix[i][j-1] + 1)
        );
      }
  }
}

console.log(matrix[x.length][y.length]);
