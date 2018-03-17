/* Finders Keepers

Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.
*/

function findElement(arr, func) {
  let result;
  arr.forEach((ele)=>{
    if(func(ele) && result == undefined){
      result = ele;
    }
  });
  return result;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

truncateString("A-tisket a-tasket A green and yellow basket", 8);


//o(n) = linear
//space = const