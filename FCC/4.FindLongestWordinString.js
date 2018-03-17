/* Find the Longest Word in a String

Return the length of the longest word in the provided sentence.
*/

function findLongestWordLength(str) {
  let words = str.split(' ');
  let longestLength = words[0].length;

  words.forEach((word)=>{
    if(word.length > longestLength){
      longestLength = word.length;
    }
  });
  return longestLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

//o(n) = linear
//space = linear