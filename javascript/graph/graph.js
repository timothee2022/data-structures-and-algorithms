'use strict';

class Vertex{
  constructor(value){
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0){
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor(){
    this._adjacencyList = new Map();
  }

  addVertex(vertex){
    this._adjacencyList.set(vertex, []);
  }

  getNodes(){
    let nodes = [];
    let edge = [];
    for (const [vertex, edge] of this._adjacencyList.entries()) {
      nodes.push(vertex);
    }
    return nodes;
  }

  getNeighbors(vertex){
    if(!this._adjacencyList.has(vertex)){
      throw new Error('null');
    }
    return [...this._adjacencyList.get(vertex)];
  }

  breadthFirst(startNode){
    const queue = [];
    const visitedNodes = new Set();

    queue.push(startNode);
    visitedNodes.add(startNode);

    while(queue.length){
      const currentNode = queue.shift();
      const neighbors = this.getNeighbors(currentNode);
      for(let neighbor of neighbors){
        const neighborNode = neighbor.vertex;
        if(visitedNodes.has(neighborNode)){
          continue;
        } else {
          visitedNodes.add(neighborNode);
        }
        queue.push(neighborNode);
      }
    }
    return visitedNodes;
  }

  size(){
    let size = 0;
    for(let key of this._adjacencyList.keys()){
      size++;
    }
    return size;
  }

}

module.exports = {Graph, Vertex};
