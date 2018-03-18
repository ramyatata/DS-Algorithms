/* Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

The lowest number will not always come first.
*/

function sumAll(arr){
  let min, max, sum = 0;
  if(arr[0] >= arr[1]){
    max = arr[0];
    min = arr[1];
  } else {
    min = arr[0];
    max = arr[1];
  }

  for(let i = min ; i <= max; i++){
   sum = sum + i;
  }
  return sum;
 }

sumAll([1, 4]);


// o(n) = linear
//space = constant