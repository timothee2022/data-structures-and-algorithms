'use strict';



class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class binaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    const order = [];
    const traverse = (node) => {
      
    }
  }
}

class binarySearchTree {
  constructor() {
    this.root = null;
  }

  // add
  add(value) {
    const node = this.root;
    if(node === null) {
      this.root = new Node(value);
      return;
    } else {
      const searchTree = function(node) {
        if(value < node.value) {
          if (node.left === null) {
            node.left = new Node(value);
            return;
          } else if (node.left !== null) {
            return searchTree (node.left);
          }
        } else if (value > node.value) {
          if (node.right === null) {
            node.right = new Node (value);
            return;
          } else if (node.right !== null) {
            return searchTree (node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  // contains
  contains(value) {
    let current = this.root;
    while(current) {
      if (value === current.value) {
        return true;
      }
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
}
