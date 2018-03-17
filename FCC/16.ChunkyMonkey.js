/* Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
  let result = [];

  while(arr.length > size) {
    result.push(arr.splice(0, size));
  }

  if(arr.length){
    result.push(arr);
  }
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

// o(n) = linear
//space = constant