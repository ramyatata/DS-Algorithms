/*  Linear Search
A linear search is the most basic of search algorithm you can have. A linear search sequentially moves through your collection (or data structure) looking for a matching value.
*/

function findIndex(values, target) {
  for(let i = 0; i < values.length; i++){
    if(values[i] === target){
      return i;
    }
  }
  return -1;
}

// o(n) = linear length of str
//space = constant