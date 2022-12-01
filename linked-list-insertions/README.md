# Challenge Summary

Write the following methods for the Linked List class:

* append
* insertBefore
* insertAfter
* insert at kth

## Approach & Solution

### Append

add(value) {
  let node = new Node(value);

  if(!this.head){
    this.head = node;
    return;
  }

  let current = this.head;

  while(current.next){
    current = current.next;
  }
  current.next = node;
}

### Insert Before

insertBefore(value, newValue){
  if(!this.head){
    throw new Error('Linked List is empty');
  }

  let current = this.head;
  while(current){
    if (current.next.value === value){
      let newNode = new Node(newValue);
      newNode.next = current.next;
      current.next = newNode;
      return;
    }
    current = current.next;
  }
}

### Insert After

insertAfter(value, newValue) {
  if (!this.head) {
    return error;
  }

  let current = this.head;

  while (current) {
    if (current.value === value) {
      let node = new Node(newValue);
      node.next = current.next;
      current.next = node;
      return;
    } else {
      current = current.next;
    }
  }
}

### Insert kth

kthFromEnd(k) {
  let length = 0;
  let current = this.head;
  while (current) {
    length++;
    current = current.next;
  }

  let results = length - k;
  if (results < 1 || result > length)
    return 'Exception';
  current = this.head;
  for (let i = 1; i < results; i++) {
    current = current.next;
  }
  return current.value;
}
