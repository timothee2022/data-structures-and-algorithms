'use strick';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
  }

  // Push method
  push(value){
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  // Pop method

  pop(value) {
    if (this.top !== null) {
      let topItem = new Node(value);
      topItem =this.top.value;
      this.top = this.top.next;
      return topItem;
    }
  }
}
