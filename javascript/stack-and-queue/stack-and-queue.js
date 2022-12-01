'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

// stack
class Stack {
  constructor(){
    this.top = null;
  }

  //push method
  push(value){
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  //pop method
  pop(){
    if (this.top === null) {
      return 'stack is empty';
    } else{
      let temp = new Node();
      temp.next = this.top;
      this.top = this.top.next;
      temp.next.next = null;
      return temp.next.value;
    }

  }

  //peek method
  peek(){
    if (this.top === null){
      return 'stack is empty';
    } else {
      return this.top.value;
    }

  }

  // check if empty
  isEmpty(){
    return this.top() === null;
  }
}

// queue
class Queue{
  constructor(){
    this.front = null;
    this.back = null;
  }

  enqueue(value){
    let newNode = new Node(value);
    if(this.front){
      this.back.next = newNode;
    }
    else{
      this.front = newNode;
    }
    this.back = newNode;
  }

  dequeue(){
    if (this.front === null) {
      return 'queue is empty';
    }else{
      let temp = new Node();
      temp.next = this.front;
      this.front = this.front.next;
      temp.next.next = null;
      return temp.next.value;
    }
  }

  peek(){
    if (this.front === null){
      return 'stack is empty';
    } else {
      return this.front.value;
    }

  }

  isEmpty(){
    return this.front() === null
  }

}


module.exports = { Node, Stack, Queue};
