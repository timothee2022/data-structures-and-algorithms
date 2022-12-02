'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class k-aryNode {
  constructor(value, k) {
    this.value = value;
    this.k = k;
    this.children = [];
  }

  function fizz-buzz-tree (children) {
    inOrderFizz(current) {
      if(current.left){
        traverse(current.left)
      }

      if(current.value % 5){
        return "Buzz";
      }

      if(current.value % 3){
        return "Fizz";
      }

      else(current.value % 3 && current.value % 5){
        return "FizzBuzz";
      }

      console.log(current.value)

      if(current.right){
        traverse(current.right)
      }

      if(current.value % 5){
        return "Buzz";
      }

      if(current.value % 3){
        return "Fizz";
      }

      else(current.value % 3 && current.value % 5){
        return "FizzBuzz";
      }

      console.log(current.value)
    }
  }
  return fizz-buzz-tree(children)
}
