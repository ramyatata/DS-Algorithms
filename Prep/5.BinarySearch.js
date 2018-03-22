/*  Binary Search

Binary search relies on a divide and conquer strategy to find a value within an already-sorted collection. The algorithm is deceptively simple.
*/

function BinarySearch(arr, target) {
  let midIndex = Math.floor(arr.length/2);
  let midVal = arr[midIndex];
  let startIndex = 0;
  let endIndex = arr.length - 1;

  while(midVal !== target && startIndex !== endIndex) {
    if(target > midVal){
      startIndex = midIndex + 1;
      midIndex = Math.floor((startIndex + endIndex)/2);
      midVal = arr[midIndex];
    } else if(target < midVal){
      endIndex = midIndex - 1;
      midIndex = Math.floor((startIndex + endIndex)/2);
      midVal = arr[midIndex];
    }
  }

  if(midVal === target){
    return midIndex;
  } else {
    return -1;
  }
}

BinarySearch([1, 4, 6, 7, 12, 13, 15, 18, 19, 20, 22, 24], 24);

// o(n) = linear length of str
//space = constant