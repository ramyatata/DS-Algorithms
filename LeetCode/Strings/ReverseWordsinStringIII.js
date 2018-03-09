/*
------ Reverse words in a string. -------

Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
*/

const reverseWords = (s) => {
  //input - string with spaces
  //output - words of string reversed with spaces reserved
  //constraints - preserve whitespaces and word order

  //split the string into words delimiting on space
  //loop through through words arr
  //forEach word
     //split the word into chars array on ''
     //reverse arr
     //join arr
     //replace result in word on arr
  //join the words arr on space
  //return joined string

  let words = s.split(' ');
  for (let i = 0; i < words.length; i++){
     words[i] = words[i].split('').reverse().join('');
  }
  return words.join(' ');
};

//o(n) = n, n is no.of words in string
//space = constant