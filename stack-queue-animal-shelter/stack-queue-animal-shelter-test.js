'use strict';

const { AnimalShelter } = require('../stack-and-queues');

describe('Animal Shelter test', () => {

  it('Can enqueue a dog and cat', () => {
    const queue = new AnimalShelter();
    queue.enqueue('dog', 'cat');
    expect(queue.dogQueue.front.value).toEqual('dog', 'cat');
  });

  it('Only accepts dogs and cats', () => {
    const queue = new AnimalShelter();
    expect(queue.enqueue('rabbit')).toBe('Only dogs and cats at this shelter');
  });

  it('Returns null if not a cat or dog', () => {
    const queue = new AnimalShelter();
    expect(queue.dequeue('rabbit')).toBeNull();
  });

  it('Returns null if not a cat or dog', () => {
    const queue = new AnimalShelter();
    queue.enqueue('dog');
    queue.enqueue('dog');
    queue.dequeue('dog');
    expect(queue.dogQueue.back.next).toBeNull();
  });
})

