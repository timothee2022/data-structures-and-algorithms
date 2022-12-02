## Code Challenge 26

### Ressources

Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.

"Quoting from [w3ressource.com](https://www.w3resource.com/javascript-exercises/searching-and-sorting-algorithm/searching-and-sorting-algorithm-exercise-4.php#:~:text=Insertion%20sort%20is%20a%20simple,%2C%20heapsort%2C%20or%20merge%20sort.)

### Algorithm

* The sorted array in the array is the value of elements on the left of the key;
* The unsorted array in the array is the value of elements on the right of the key;
* Select the first unsorted element;
* Swap other elements to the right of the array to create the correct position and shift the unsorted element;
* Advance the marker to the right one element

### Code

const insertionSort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    let j = i - 1;
    let temp = nums[i];
    while (j >= 0 && nums[j] > temp) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j+1] = temp;
  }
  return nums;
};

module.exports = insertionSort;

### Big O

Time: O(n)
Space: O(1)
