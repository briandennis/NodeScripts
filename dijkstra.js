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

  //initialize nodeInfo with all nodes
  graph.nodes.forEach(function(item){
    if(item !== v){
      nodeInfo.set(item, [null, Infinity]);
    }
    else{
      console.log('adding v to nodeset...');
      previous.set(item, [null, 0]);
    }
  });

  //spoofed, actually takes O(n) time, but could be O(log n) if
  // a heap or real binary search algorithm was used
  function binaryInsert(node){
    var nodeWeight = nodeInfo.get(node)[1];
    var wasAdded = false;
    for(var i = 0; i < queue.length; i++){
      if(nodeInfo.get(queue[i])[1] > nodeWeight){
        queue.splice(i, 0, node);
        break;
      }
    }
    if(!wasAdded) queue.push(node);
  }

  //how to handle every edge
  var handleNode = function(destinationNode, weight){
    if(!visited.includes(destinationNode)){
      if(!queue.includes(destinationNode)){
        nodeInfo.set(destinationNode, [currNode,currDistance + weight]);
        binaryInsert(destinationNode);
      }
      else{
        if(nodeInfo.get(destinationNode)[1] > currDistance + weight){
          queue.remove(destinationNode);
          nodeInfo.set(destinationNode, [nodeInfo.get(destinationNode)[0], currDistance + weight]);
          binaryInsert(destinationNode);
        }
      }
    }
  };

  while(queue.length > 0){
    var currNode = queue.shift();
    visited.push(currNode);
    var currDistance = nodeInfo.get(currNode);
    currNode.edges.forEach(handleNode);
  }

  var backTraceNode = u;
  console.log(u.value);
  while(nodeInfo.get(backTraceNode)[0] !== null){
    backTraceNode = nodeInfo.get(backTraceNode)[0];
    console.log(backTraceNode.value);
  }
  return nodeInfo.get(u)[1];
}
