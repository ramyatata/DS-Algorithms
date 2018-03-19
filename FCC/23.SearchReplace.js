/* Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).
*/


function myReplace(str, before, after) {
  const ind = str.indexOf(before);
  if(before[0].toUpperCase() === before[0]){
    after = after[0].toUpperCase() + after.substring(1);
  }
  return str.substring(0, ind)+after+str.substring(ind+before.length);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");


// o(n) = linear length of args
//space = constant