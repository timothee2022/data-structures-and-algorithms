'use strict';

const insertionSort = require('./insertion-sort');

describe('insertion-sort', () => {
  it('can sort through the array', () => {

    let array = [20, 8, 1, -6, 0, 50];

    let answer = insertionSort(array);

    expect(answer).toEqual([-6, 0, 1, 8, 20, 50]);

  });

});
