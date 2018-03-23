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



function binary(arr, target) {
  //set startIndex = 0
  //endIndex = length -1
  //declare mid index
  //while startIndex <= endIndex
    //calculate mid point
    //if value at midPoint === target return midPoint
    //else if val > target then set endIndex = mid -1
    //else if val < target then set startIndex = mid + 1
  //return -1

  let start = 0;
  let end = arr.length - 1;
  let mid;
  while(start <= end){
    mid = Math.floor((start + end)/2);
    if(arr[mid] === target){
      return mid;
    } else if(arr[mid] > target){
      end = mid - 1;
    } else if(arr[mid] < target){
      start = mid + 1;
    }
  }
  return -1;
}

BinarySearch([1, 4, 6, 7, 12, 13, 15, 18, 19, 20, 22, 24], 24);

// o(n) = linear length of str
//space = constant