/* Pig Latin
Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/


function translatePigLatin(str) {
  //find the first Vowel index through looping
    //if index is 1 then add 'way' to end and return
    //else take string after beforeIndex and add ay to end of it
    // add this to second part of string from ind
    //return it

  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let ind;

  for(let i = 0; i < str.length; i++){
    if(vowels.indexOf(str[i]) !== -1 && ind === undefined){
      ind = i;
      break;
    }
  }

  if(ind === 0){
    return str + 'way';
  } else if(ind > 0){
    let firstPart = str.substring(0, ind) + 'ay';
    let secondPart = str.substring(ind);
    return secondPart+firstPart;
  } else {
    return str + 'ay';
  }
}

translatePigLatin("consonant");


// o(n) = linear length of args
//space = constant