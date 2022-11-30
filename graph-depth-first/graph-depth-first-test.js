'use strict';

const { describe } = require('eslint/lib/rule-tester/rule-tester');
const graphDepthFirst = require('./graph-depth-first');

describe('graphDepthFirst', () => {
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

    const node = graphDepthFirst(graph, 'a');
    expect(node).toEqual(new Set(['a', 'b', 'd', 'c', 'e']));
  });
});
