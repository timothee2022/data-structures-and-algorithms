# Challenge Summary

Write a method for the graph class:

* breath first
* arguments: node
* return: A collection of nodes in order they were visited
* display the collection

## Whiteboard Process

![Code Challenge 36](./Code%20Challenge%2036.PNG)

## Approach & Efficiency

* declare a method called breadth-first that take a node as argument and
return a collection of node in order they were visited;

* if the queue is empty, return false for visited node;
* traverse through the stack and enqueue a node that I visited;
* visit the  the neighbors(children) of the node and mark as visited enqueue;
* repeat the process while the queue is not empty.

## Solution

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
