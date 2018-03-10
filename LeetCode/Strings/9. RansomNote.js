/*
*****************   Ransom Note   *******************
Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true

*/

var canConstruct = function(ransomNote, magazine) {
  //input two strings
  //output bool
  //is not case sensitive

  //count number of each char in ransomNote using filt
  //count number in magazine
  //loop through ransomObj keys
    //for each key value check if count of magnazine key > key value of ransomObj key and magazine key value is defined
        //if not return false
    //return true

  ransomNote = ransomNote.toLowerCase();
  magazine = magazine.toLowerCase();

  var ransomObj = ransomNote.split('').reduce((acc, char)=>{
    acc[char] = acc[char] === undefined ? 1 : ++acc[char]
    return acc;
  }, {});

  var magazineObj = magazine.split('').reduce((acc, char)=>{
    acc[char] = acc[char] === undefined ? 1 : ++acc[char]
    return acc;
  }, {});

  if(ransomObj.keys > magazineObj.length){
    return false
  } else {
    for(let keys in ransomObj){
      if(magazineObj[keys] === undefined || magazineObj[keys] < ransomObj[keys]){
         return false;
      }
    }
  }
  return true;
};

//o(n) = n
//space = constant
