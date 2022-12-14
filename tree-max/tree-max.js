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
/home/hsp20tim/projects/data-structures-and-algorithms/javascript/code-challenges/reverse-ll
    }
    if (node.right) {
      traverse(node.right);
    }
  };
  traverse(this.root);
  return temp.value;
}

