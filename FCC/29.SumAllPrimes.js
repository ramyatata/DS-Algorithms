/*  Sum All Primes
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.
*/

function sumPrimes(num) {
  let sum = 0;
  for(let i = 1; i <= num; i++){
    if(isPrime(i)){
      sum += i;
    }
  }
  return sum;
}

function isPrime(n){
  if(n <= 1) return false;
  if(n <= 3) return true;
  if(n %2 == 0 || n%3 == 0) return false;
  let isPrime = true;
  for(let i = 5; i * i <= n; i++ ){
    if(n % i === 0){
      return false;
    }
  }
  return true;
}

sumPrimes(977);

// o(n) = linear length of str
//space = constant