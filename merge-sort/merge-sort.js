'use strict';

// merge method
function merge(leftArray, rightArray) {
  let arr = [];

  while (leftArray.length && rightArray.length) {

    if (leftArray[0] < rightArray[0]) {
      arr.push(leftArray.shift());
    } else {
      arr.push(rightArray.shift());
    }
  }
  return [...arr, ...leftArray, ...rightArray];
}

// sort method

function mergeSort(array) {
  const half = array.length / 2;

  if(array.length < 2){
    return array;
  }

  const left = array.splice(0, half)
  return merge(mergeSort(left),mergeSort(array));
}

module.exports = {mergeSort, merge};
