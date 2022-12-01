'use strict';

const { describe } = require('eslint/lib/rule-tester/rule-tester');
const hashmapLeftJoin = require('./hashmap-left-join');

describe('hashmap-left-join', () => {
  it('should return an array of arrays', () => {
    let leftTable = [{
      leftId: 4,
      name: 'Will'
    }, {
      leftId: 3,
      name: 'Michael'
    }, {
      leftId: 8,
      name: 'Susan'
    }, {
      leftId: 2,
      name: 'Bob'
    }];


    let rightTable = [{
      rightId: 1,
      color: 'Blue'
    }, {
      rightId: 8,
      color: 'Red'
    }, {
      rightId: 2,
      color: 'Orange'
    }, {
      rightId: 7,
      color: 'Red'
    }];


    expect(hashmapLeftJoin(leftTable, rightTable)).toEqual([
      {
        'leftId': 4,
        'name': 'Will'
      },
      {
        'leftId': 3,
        'name': 'Michael'
      },
      {
        'leftId': 8,
        'name': 'Susan',
        'rightId': 8,
        'color': 'Red'
      },
      {
        'leftId': 2,
        'name': 'Bob',
        'rightId': 2,
        'color': 'Orange'
      }
    ]);
  });
});
