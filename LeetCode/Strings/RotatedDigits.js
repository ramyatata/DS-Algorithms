/*

************* Rotated Digits *************

X is a good number if after rotating each digit individually by 180 degrees, we get a valid number that is different from X.  Each digit must be rotated - we cannot choose to leave it alone.

A number is valid if each digit remains a digit after rotation. 0, 1, and 8 rotate to themselves; 2 and 5 rotate to each other; 6 and 9 rotate to each other, and the rest of the numbers do not rotate to any other number and become invalid.

Now given a positive number N, how many numbers X from 1 to N are good?

Example:
Input: 10
Output: 4
Explanation:
There are four good numbers in the range [1, 10] : 2, 5, 6, 9.
Note that 1 and 10 are not good numbers, since they remain unchanged after rotating.
Note:

N  will be in range [1, 10000].
*/

var rotatedDigits = function(N) {
  //input n of range 1 to N
  //output number of valid numbers
  //constraints = N is always positive

  //loop through 1 to N
    //convert each number to string
    //send to helper function rotate
      //if value is not invalid
      //convert string to number and check with input
      //if not equal push to array
  //return array
  let rotatedValues = 0;
  for(let i = 1; i <= N; i++) {
    let numberString = i.toString();
    let res = rotate(numberString);
    if(res !== 'invalid' && Number(res) != i){
      rotatedValues++
    }
  }
  return rotatedValues;

};

let rotate = (numberString) => {
    //input string
    //output rotated string


    //rotated values object
    // let rotatedString = '';
    //loop through string
      //if char has value in rotateValue object, append it to rotatedString
      //if undefined return invalid

    const rotateValues = {
      '0': '0',
      '1': '1',
      '2': '5',
      '5': '2',
      '6': '9',
      '8': '8',
      '9': '6'
    }

    let rotatedString = '';
    for(let i = 0; i < numberString.length; i++){
      if(rotateValues[numberString[i]] !== undefined){
        rotatedString += rotateValues[numberString[i]];
      } else {
        return 'invalid';
      }
    }
    return rotatedString;
}

//o(n) = nlogn logn for digits loop in each number (rotate fun)
//space complexity = constant