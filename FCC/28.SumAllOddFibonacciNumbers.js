/*  Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5
*/

function sumFibs(num) {
  if(num === 1){
    return 2;
  } else if(num < 1){
    return undefined;
  } else {
    let fib = [1, 1];
    let res = 2;

    while(fib[fib.length-1] <= num){
      let len = fib.length;
      fib[len] = fib[len-1] + fib[len-2];
      if(fib[len] <= num && fib[len] % 2 !== 0){
        res += fib[len];
      }
    }

    return res;
  }
}


sumFibs(4);

// o(n) = linear length of str
//space = constant