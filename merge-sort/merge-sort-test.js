'use strict';

const {mergeSort} = require('../merge-sort');

describe('insertion-sort', () => {
  it('can sort through the array', () => {

    let array = [5, 9, 1, 20, 8];

    let answer = mergeSort(array);

    expect(answer).toEqual([1, 5, 8, 9, 20]);

  });


  it('can sort through a reverse-sorted array', () => {

    let array = [10, 8, 3, 2, 0];

    let answer = mergeSort(array);

    expect(answer).toEqual([0, 2, 3, 8, 10]);

  });

  it('can sort through an array with few uniques', () => {

    let array = [0, 1, 1, 98, 1, 9, 1];

    let answer = mergeSort(array);

    expect(answer).toEqual([0, 1, 1, 1, 1, 9, 98]);

  });

  it('can sort through a nearly-sorted array', () => {

    let array = [1, 2, 3, 4, 5, 6, 7];

    let answer = mergeSort(array);

    expect(answer).toEqual([1, 2, 3, 4, 5, 6, 7]);

  });

});
