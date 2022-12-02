# Code Challenge 31

![Code Challenge 31 WhiteBoard](./Code%20Challenge%2031.PNG)

### Author: Timothee Odushina

### Date: 31 October 2022

### Ressources:

[geeks-for-geeks](https://www.geeksforgeeks.org/find-first-repeated-word-string/)
[youtube](youtube.com)

### Problem domain:

* Write a function called repeated word that finds the first word to occur more than once in a string
* Arguments: string
* Return: string

### Input & Output:

* Input: string of words
* Output: first repeated word in string

### Test Cases:

* Are the strings empty?
* If the string has no repeated words, return "No repeated words"

### Visualization:

![](./Code%20Challenge%2031.PNG)

### Algorithm:

* Write a function called repeated-word that take string as
argument and return string.

* declare a two variables:
  * the first "t" one will be an empty which will store a temporary words value

  * the second "ans" will be assigned to the first repeated word

* if space is there then this word t needs to stored in map
* if that string t has occurred previously then it is a possible ans
* set t as empty for again new word
* first word like "he" needs to be mapped
* first word like "he" needs to be mapped

### Code :

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
