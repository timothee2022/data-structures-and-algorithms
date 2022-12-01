'use strict';

function graphDepthFirst(graph, Node) {

  const nodeVisited = new Set();

  function traverse(node) {
    if (!node) {
      return null;
    }
    nodeVisited.add(node);
    const neighbors = graph[node];

    for (let neighbor of neighbors) {
      if (nodeVisited.has(neighbor)) {
        continue;
      }
      traverse(neighbor);
    }
  }

  traverse(Node);
  return nodeVisited;
}

module.exports = graphDepthFirst;
