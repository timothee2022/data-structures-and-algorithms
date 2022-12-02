'use strict';

const {Node, BinaryTree} = require('./tree-max');

describe('Find Max', () => {

  it('Can find the highest value in a tree', () => {

    let tree = new BinaryTree();
    tree.root = new Node(152);
    tree.root.left = new Node(5);
    tree.root.right = new Node(1);
    tree.root.left.left = new Node(36);
    tree.root.left.right = new Node(635);
    tree.root.right.left = new Node(56);
    tree.root.right.right = new Node(78);

    let answer = tree.treeMax();

    expect(answer).toEqual(635);
  });


  it('Will throw an error if the binary tree is empty', () => {

    let tree = new BinaryTree();

    expect(() => tree.treeMax()).toThrow (new Error ('this tree is empty'));
  });

});
