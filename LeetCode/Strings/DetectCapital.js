/*
*****************   Detect Capital   *******************

Given a word, you need to judge whether the usage of capitals in it is right or not.

We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital if it has more than one letter, like "Google".
Otherwise, we define that this word doesn't use capitals in a right way.
Example 1:
Input: "USA"
Output: True
Example 2:
Input: "FlaG"
Output: False
Note: The input will be a non-empty word consisting of uppercase and lowercase latin letters.

*/

var detectCapitalUse = function(word) {
  //input = word
  //output = bool
  //constraints non zero string with only letters

  //storage for capital count
  //check if word.uppercase === word and return true
  //else check word.lowercase === word, return true
  //else loop through string
     // forEach char check if it uppercase or lowercase
     //if uppercase update count
  //if count ==1 and word[0].uppercase = word[0] return true
  //else return false

  let capitalCount = 0;
  if(word.toUpperCase() === word) return true;
  if(word.toLowerCase() === word) return true;
  for(let i = 0; i < string.length; i++) {
    if(word[i].toUpperCase() === word[i])
      capitalCount++;
  }

  return capitalCount === 1 ? word[0].toUpperCase === word[0]? true: false :false
};

//o(n) = n, string length worse case scenario
//space complexity = constant