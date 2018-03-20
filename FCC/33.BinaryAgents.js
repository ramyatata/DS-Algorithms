/*  Binary Agents
Return an English translated sentence of the passed binary string.

The binary string will be space separated.
*/

function binaryAgent(str) {
  let binaries = str.split(' ');
  let res = "";
  for(let i = 0; i < binaries.length; i++){
    let char = String.fromCharCode(binaryToNumber(binaries[i]));
    res += char;
  }
  return res;
}

function binaryToNumber(bin){
  let number = 0;
  let pow = 0;

  bin = bin.split('');

  while(bin.length){
    let digit = parseInt(bin.splice(bin.length-1)) * Math.pow(2, pow);
    pow++;
    number += digit;
  }
  return number;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

// o(n) = linear length of str
//space = constant