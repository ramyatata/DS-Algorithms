/* Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

*/

function titleCase(str) {
  let words = str.split(' ');

  for(let i = 0; i < words.length; i++){
    words[i] = words[i][0].toUpperCase() + words[i].substring(1).toLowerCase();
  }
  return words.join(' ');
}

titleCase("I'm a little tea pot");

// o(n) = linear
//space = linear