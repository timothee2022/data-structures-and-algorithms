'use strict';

const { describe } = require('eslint/lib/rule-tester/rule-tester');
const bfs = require('./graph-breadth-first');

describe('breadthFirst', () => {
  it('should return a set of all nodes visited', () => {
    const graph = {
      a: ['b', 'c', 'd'],
      b: ['a', 'd'],
      c: ['a', 'e'],
      d: ['a', 'b'],
      e: ['c'],
      f: ['g'],
      g: ['f'],
    };

    const nodes = bfs(graph, 'a');
    expect(nodes).toEqual(new Set(['a', 'b', 'c', 'd', 'e']));
  });
});

