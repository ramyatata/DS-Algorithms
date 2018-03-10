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



var firstUniqChar = function(s) {
  let count = [];
  let index = -1;

  for(let i = 0; i < s.length; i++){
    if(!count[s[i]]){
      count[s[i]] = 1;
    } else {
      count[s[i]] += 1;
    }
  }

  for(let i = 0; i < s.length; i++){
    if(count[s[i]] == 1){
      return i;
    }
  }
  return index;
};

//0(n) = n
//space = n