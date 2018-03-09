/*
****************  Reverse String  *******************

Write a function that takes a string as input and returns the string reversed.

Example:
Given s = "hello", return "olleh".
*/

const reverseString = (s) => {
  return s.split('').reverse().join('');
};

//recursion solution

const reverseString = (s) => {
  if(s === '') {
    return '';
  }

  return reverseString(s.substring(1)) + s.charAt(0);
}

//0(n) = n
//space complexity = n