/*
*************************. Reverse String II *******************

Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. If there are less than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.
Example:
Input: s = "abcdefg", k = 2
Output: "bacdfeg"
Restrictions:
The string consists of lower English letters only.
Length of the given string and k will in the range [1, 10000]
*/

var reverseStr = function(s, k) {
    //input = string and integer
    //output string


    //take k elements at a time and reverse them alternatively
    //append to outout string

    let reverse = true;
    let output = "";
    while(s.length){
        let subString = s.substr(0, k);
        if(reverse) {
          subString = subString.split('').reverse().join('');
        }
        output += subString;
        reverse = !reverse;
        s = s.substr(k);
    }
    return output;
};

//o(n) = n, size of input
//space = n output