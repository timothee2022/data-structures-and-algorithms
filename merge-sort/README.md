# Code Challenge - Class 27

## Code Challenge Topic: Merge Sort

### Author: Timothee Odushina

### Problem Domain

Review the pseudocode below, then trace the algorithm by stepping through the process with the provided sample array. Document your explanation by creating a blog article that shows the step-by-step output after each iteration through some sort of visual.

Once you are done with your article, code a working, tested implementation of Merge Sort based on the pseudocode provided.

### Ressources

[stackabuse](https://stackabuse.com/merge-sort-in-javascript/)
[youtube video](youtube.com)

### Pseudocode

ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length

    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1

        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left

### Algorithm

Here are the steps Merge Sort takes:

* Split the given list into two halves (roughly equal halves in case of a list with an odd number of elements).
* Continue dividing the subarrays in the same manner until you are left with only single element arrays.
* Starting with the single element arrays, merge the subarrays so that each merged subarray is sorted.
* Repeat step 3 unit with end up with a single sorted array.

### Code

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

### Big O

Time: O(log(n))
Space: O(log(n))

