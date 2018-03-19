/* Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/


function spinalCase(str) {
  str = str.replace(/_/g, '');
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  str = str.trim().toLowerCase().split(' ').join('-');
  return str;
}
spinalCase('This Is Spinal Tap');


// o(n) = linear length of args
//space = constant