'use strict';

let input = 'Once upon a time, there was a brave princess who...';

var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

function repeatedWord(string) {
  return string.replace(regex, '');
}


function first_repeating_word(string){

  let puncString = repeatedWord(string);
  let lowString = puncString.toLowerCase();

  let word_count = new Map();

  for(let i of lowString.split(' ')){
    if(word_count.has(i)){
      word_count.set(i,word_count.get(i) + 1);
    }
    else word_count.set(i,1);

    if(word_count.get(i) > 1)
      return i;
  }
  return 'No Repetition';
}

console.log(first_repeating_word(input));


module.exports = first_repeating_word;
