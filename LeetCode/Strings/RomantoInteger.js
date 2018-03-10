/*
*********************.  Roman to Integer. ***************
Given a roman numeral, convert it to an integer.
Input is guaranteed to be within the range from 1 to 3999.
*/

var romanToInt = function(s) {
  let roman = {
    "M": 1000,
    "CM": 900,
    "D": 500,
    "CD": 400,
    "C": 100,
    "XC": 90,
    "L": 50,
    "XL": 40,
    "X": 10,
    "IX": 9,
    "V": 5,
    "IV": 4,
    "I": 1
  };
  let number = 0;

  while(s.length) {
   let chars = s.substr(0, 2);
    if(roman[chars]){
      number += roman[chars];
      s = s.substr(2);
    } else {
      number += roman[s.substr(0,1)];
      s = s.substr(1);
    }
  }
  return number;
};

//o(n) = n length of string
//space = constant