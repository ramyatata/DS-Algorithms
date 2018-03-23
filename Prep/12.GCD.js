/* GCD of two numbers

https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm

https://class.outco.io/courses/technical/lectures/2067856
*/


function GCD(num1, num2){
  if(num1 === 0){
    return num2;
  } else if (num2 === 0){
    return num1;
  } else if(num1 === num2){
    return num1;
  }

  let a = num1 > num2 ? num1 : num2;
  let b = num1 > num2 ? num2 : num1;

  let r = a % b

  return GCD(b, r);
}


function gcd(a, b) {
  if (a < 0) a = -1*a;
  if (b < 0) b = -1*b;

  if(b > a){
    [a, b] = [b, a];
  }

  while(b > 0){
    [a, b] = [b, a%b];
  }

  return a;


}