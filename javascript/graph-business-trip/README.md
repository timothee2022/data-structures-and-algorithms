# Challenge Summary

* Write a function called business trip

* Arguments: graph, array of city names

* Return: the cost of the trip (if it’s possible) or null (if not)

## Whiteboard Process

![Code Challenge 37](./Code%20Challenge%2037.PNG)

## Approach & Efficiency

* declare a function called business trip that takes graph and array of city name;
* if the array is empty, return null;
* if the array has only a unique city, return 0;
* declare a variable called totalCost and set it to 0;
* loop through the array and check if it is a direct trip, and return the cost of the trip
* if not, return null

## Solution

Code:

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
