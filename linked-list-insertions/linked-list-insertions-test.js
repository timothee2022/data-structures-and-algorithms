const { LinkedList } = require('./linked-list-insertions');

describe('tests', () => {
  let newList = new LinkedList();
  newList.insert('1');
  newList.insert('2');
  newList.insert('3');
  newList.insert('4');
  newList.insert('5');

  test('k is greater than the length of the list', () => {
    expect(newList.kthFromEnd(6)).toEqual('Exception');
  });

  test('Where k and the length of the list are the same', () => {
    expect(newList.kthFromEnd(5)).toEqual('Exception');
  });

  test('Where k is not a positive integer', () => {
    expect(newList.kthFromEnd(-4)).toEqual('Exception');
  });

  test('Where the linked list is of a size 1', () => {
    let size = new LinkedList();
    size.insert(1);
    expect(size.kthFromEnd(5)).toEqual('Exception');
  });

  test(' where k is not at the end, but somewhere in the middle of the linked list', () => {
    expect(newList.kthFromEnd(2)).toEqual(2);
  });

});
