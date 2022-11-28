'use strict';

function graphBusinessTrip(graph, array) {

  if (array.length === 0) {
    return null;
  }
  if (array.length === 1) {
    return 0;
  }
  let totalCost = 0;

  for (let i = 0; i < array.length - 1; i++) {
    let currentCity = array[i];
    let nextCity = array[i + 1];

    let neighbors = graph.getNeighbors(currentCity);
    let found = false;

    for (let j = 0; j < neighbors.length; j++) {
      if (neighbors[j].vertex === nextCity) {
        totalCost += neighbors[j].weight;
        found = true;
        break;
      }
    }
    if (!found) {
      return null;
    }
  }
  return totalCost;
}

module.exports = graphBusinessTrip;
