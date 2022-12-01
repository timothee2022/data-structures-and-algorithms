'use strict';

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


function hashmapLeftJoin(leftTable, rightTable) {

  let result = [];
  let keys = Object.keys(leftTable);

  for (let i = 0; i < keys.length; i++) {

    let key = keys[i];
    let value = leftTable[key];
    let antonym = rightTable[key];
    result.push([key, value, antonym]);
  }

  return result;
}

console.log(hashmapLeftJoin(leftTable, rightTable));

module.exports = hashmapLeftJoin;
