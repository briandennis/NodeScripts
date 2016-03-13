function Node (value, edges){
  this.value = value;
  var edgeMap = new Map();
  edges.forEach(function(item){
    edgeMap.set(item[0], item[1]);
  });
  this.edges = edgeMap;
}

function Graph (nodes){
  this.nodes = nodes;
  this.shortestPath = dijkstra(v,u);
}

function dijkstra(v,u, graph){
  var queue = [v];
  var visited = [v];

  var nodeInfo = new Map();
  previous.set(v, null);

  var handleNode = function(destinationNode, weight){
    if(!visited.includes(destinationNode)){
      if(!queue.includes(destinationNode)){
        
      }
    }
  };

  while(queue.length > 0){
    var currNode = queue.shift();
    currNode.edges.forEach(handleNode);
  }
}
