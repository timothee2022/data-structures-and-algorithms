'use strict';

const { describe } = require('eslint/lib/rule-tester/rule-tester');
const first_repeating_word = require('./hashmap-repeated-word');

describe('first_repeating_word', () => {
  it('should return the first repeated word', () => {
    let string = 'Once upon a time, there was a brave princess who...';
    expect(first_repeating_word(string)).toEqual('a');
  });
});
