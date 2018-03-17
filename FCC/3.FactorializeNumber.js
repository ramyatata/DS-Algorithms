/* Factorialize a Number

Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!
*/

function factorialize(num) {
  if(num <= 1){
    return 1;
  }

  return num * factorialize(num - 1);
}

//o(n) = linear
//space = const