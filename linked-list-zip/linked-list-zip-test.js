'use strict';

const {Node, LinkedList, zipNode, zipLists} = require('./linked-list-zip');

describe('zipLists', () => {

  it('Returns a zipped list', () => {

    let listOne = new LinkedList;
    let listTwo = new LinkedList;

    listOne.insert(1);
    listOne.append(3);
    listOne.append(5);

    listTwo.insert(2);
    listTwo.append(4);
    listTwo.append(6);

    let zipped = zipLists(listOne, listTwo);

    expect(zipped).toEqual('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } -> NULL');
  });

});
