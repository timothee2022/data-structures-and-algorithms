const businessTrip = require('./graph-business-trip');
const { Graph } = require('../graph');

describe('businessTrip', () => {

  it('should return null if the array is empty', () => {
    let graph = new Graph();
    let array = [];
    expect(businessTrip(graph, array)).toBeNull();
  });

  it('should return 0 if the array has one city', () => {
    let graph = new Graph();
    let array = ['Seattle'];
    expect(businessTrip(graph, array)).toEqual(0);
  });


  it('should return the cost of the trip if the trip is possible', () => {
    let graph = new Graph();
    graph.addVertex('Seattle');
    graph.addVertex('Portland');
    graph.addVertex('San Francisco');
    graph.addDirectedEdge('Seattle', 'Portland', 100);
    graph.addDirectedEdge('Portland', 'San Francisco', 200);
    let array = ['Seattle', 'Portland', 'San Francisco'];
    expect(businessTrip(graph, array)).toEqual(300);
  });

});
