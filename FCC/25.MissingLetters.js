/* Missing letters
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/


function fearNotLetter(str) {
  let startInd = str.charCodeAt(0);
  for(let i = 0; i <str.length; i++, startInd++){
    if(str.charCodeAt(i) !== startInd){
      return String.fromCharCode(startInd);
    }
  }
  return undefined;
}

fearNotLetter("abce");


// o(n) = linear length of str
//space = constant