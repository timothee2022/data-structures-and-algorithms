'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class AnimalShelter{

  construction(){
    this.dogQueue = new Queue();
    this.catQueue = new Queue();
  }

  enqueue(animal) {
    if(animal === 'dog'){
      this.dogQueue.enqueue(animal);
    } else if(animal === 'cat'){
      this.catQueue.enqueue(animal);
    } else{
      return 'Only Dogs or Cats from this shelter';
    }
  }

  dequeue(pref){
    if(pref === 'dog'){
      let dog = this.dogQueue.dequeue();
      return dog;
    }
    if(pref === 'cat'){
      let cat = this.catQueue.dequeue();
      return cat;
    }
    if(pref !== 'cat' && pref !== 'dog'){
      return null;
    }
  }
}

module.exports = { Node, AnimalShelter};
