'use strict';

const bfs = (grap, node) => {
  const queue = [];
  const nodeVisited = new Set();

  queue.push(node);
  nodeVisited.add(node);

  while(queue.length){
    const currentNode = queue.shift();
    const neighbors = graph[currentNode];

    for(let neighbor of neighbors){
      if(nodeVisited.has(neighbor)){
        continue;
      }
      nodeVisited.add(neighbor);
      queue.puush(neighbor);
    }
  }
  console.log('queue', queue);
  return nodeVisited;
}

module.exports = bfs;


