/*   Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
*/

function palindrome(str) {
  str = str.replace(/[^0-9A-Za-z]/gi, '');
  str = str.toLowerCase();
  return str === str.split('').reverse().join('');
}



palindrome("eye");

// o(n) = linear length of str
//space = constant