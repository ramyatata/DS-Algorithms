/*  Binary Search

Binary search relies on a divide and conquer strategy to find a value within an already-sorted collection. The algorithm is deceptively simple.
*/

function BinarySearch(arr, target) {
  let midIndex = Math.floor(arr.length/2);
  let midVal = arr[midInd];
  let startInd = 0;
  let endIndex = array.length - 1;

  while(midVal !== target && startInd !== endIndex) {
    if(target > midVal){
      startIndex = midInd + 1;
      midIndex = Math.floor((startIndex + endIndex)/2);
      midVal = arr[midInd];
    } else if(target < midVal){
      endIndex = midInd - 1;
      midIndex = Math.floor((startIndex + endIndex)/2);
      midVal = arr[midInd];
    }
  }

  if(midVal === target){
    return midInd;
  } else {
    return -1;
  }
}

findIndex([1, 4], 20);

// o(n) = linear length of str
//space = constant