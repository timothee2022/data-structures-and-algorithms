# Code Challenge 31

![Code Challenge 31 WhiteBoard](./Code%20Challenge%2031.PNG)

Author: Timothee Odushina

Date: 31 October 2022

Problem domain:

* Write a function called repeated word that finds the first word to occur more than once in a string
* Arguments: string
* Return: string

Input & Output:

* Input: string of words
* Output: first repeated word in string

Test Cases:

* Are the strings empty?
* If the string has no repeated words, return "No repeated words"

Visualization:

![](./Code%20Challenge%2031.PNG)

Algorithm:

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

Code :

function repeated-word(string) {

    let mp = new Map();
    let t = "";
    let ans = "";

    for(let i = s.length - 1; i >= 0; i--) {

        if(s[i] != ' ') {

            t += s[i]; } else {

                if(mp.has(t))

               ans = t;

            else mp.set(t, 1)

            t = ""; }

    }

    if(mp.has(t)) ans=t;

    if(ans!="")

    { ans = [...ans].reverse().join("");

        document.write(ans);}

    else

    document.write("No Repeated words");

}
