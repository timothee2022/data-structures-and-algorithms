'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

function zipNode(originalList, pointer) {


  let current = originalList.head;
  originalList.head = current.next;
  current.next = null;
  pointer.next = current;
  pointer = pointer.next;
  pointer.next = null;

  return pointer;

}


function zipLists (linkedList1, linkedList2) {
  let linkedList3 = new LinkedList;
  let newNode = new Node;
  let C1 = 0;

  C1 = linkedList1.head;
  linkedList1.head = C1.next;
  C1.next = null;
  linkedList3.head = C1;
  newNode = linkedList3.head;

  while (linkedList1.head !== null && linkedList2.head !== null) {
    newNode = zipNode(linkedList2, newNode);
    newNode = zipNode(linkedList1, newNode);
  }

  if (linkedList1.head !== null) {
    newNode.next = linkedList1.head;
  } else if (linkedList2.head !== null) {
    newNode.next = linkedList2.head;
  }
  return linkedList3.toString();
}

module.exports = {Node, LinkedList, zipNode, zipLists};
