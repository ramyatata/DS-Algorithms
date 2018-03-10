/*
  ********************.   firstUniqChar.  *************
  Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.

*/

const firstUniqChar = (s) => {
  //input string
  //output index
  //constriants - string has only small letters

  //reduce string to obj that has count of letter
  //loop through object keys and push the ones with val into arr;
  //store least index as index of first elem in string
  //loop through arr and find index of char in s
    //if ind is < update least ind

  let obj = s.split('').reduce((acc, char)=>{
    acc[char] = acc[char] == undefined ? 1 : ++acc[char];
    return acc;
  }, {});

  let singleCountArr = [];
  for(let keys in obj){
    if(obj[keys] === 1){
      singleCountArr.push(keys);
    }
  }
  if(!singleCountArr.length){
    return -1;
  }

  let index = s.indexOf(singleCountArr[0]);

  for (let i = 0; i < singleCountArr.length; i++){
    if(s.indexOf(singleCountArr[i]) < index ){
      index = s.indexOf(singleCountArr[i]) ;
    }
  }
  return index;
};



function findFirstUniqueCharacter( inputString ) {
    let freqCounter = [];

    // The issue using Map data structure is during the retrival. As it does not gaurantee the keys will be retrived in the same order as they were inserted
    // Hence, we use an array of frequency counter. But in this array keys are found using the ascii values of the character.

    inputString.split('').forEach(ch => {
        if (!freqCounter[ch])
            freqCounter[ch] = 1;
        else
            freqCounter[ch]++;
    });

    // Observe this array. It's kinda Map only.
    console.log(freqCounter);

    for (let i = 0; i < inputString.length - 1; i++) {
        let ch = inputString[i];
        if (freqCounter[ch] == 1)
            return ch;
    }
    return 'No Unique Character Found';
}

//0(n) = n
//space = n