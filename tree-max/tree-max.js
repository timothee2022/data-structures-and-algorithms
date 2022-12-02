'use strict';

findMax(node) {

  if (!this.root) {
    throw new Error('this tree is empty');
  }

  let temp = new Node(this.root.value);

  const traverse = (node) => {

    if (node.value > temp.value) {
      temp.value = node.value;
    }

    if (node.left) {
      traverse(node.left);

    }
    if (node.right) {
      traverse(node.right);
    }
  };
  traverse(this.root);
  return temp.value;
}

