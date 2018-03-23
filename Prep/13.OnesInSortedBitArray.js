/*  Number of Ones in a Sorted Bit Array
Given a sorted bit array (values of either 0 or 1), determine the number of 1’s in the array.

Perform this in O(log(N)) time complexity.

Input: [0,0,0,1,1,1,1,1,1,1,1]

Output: 8
*/

function SortBitArray(arr) {
  //input = sorted array
  //ouput = number of 1
  //constraints = o(logN) = binary search

  //find the index of 1 and subtract it from length of array
  // take the midpoint
      //check the value at midpoint is 1 and previous is 0 then ind = midpoint
      //the value at midpoint is 1 and previous = 1 then set end = midpoint - 1
      //the value at midpoint is 0 and next value is 1 set ind = midpoint + 1
      //the value at midpoint is 0 and prev is 0 set start as midPoint + 1
  //if index is defined return array.length - index
  //else return 0;


  let start = 0;
  let end = arr.length - 1;
  let mid;
  let ind;

  while(start <= end && ind !== undefined){
    mid = Math.floor((start + end)/2);
    val = arr[mid];
    if(val === 1 && arr[mid - 1] === 0) {
      ind = mid;
    } else if(val === 1 && arr[mid-1] === 1){
      end = mid -1;
    } else if(val === 0 && arr[mid + 1] === 1){
      ind = mid + 1;
    } else if(val === 0 && arr[mid - 1] === 0){
      start = mid + 1;
    }
  }
  if(ind === undefined){
      return 0;
    }
    return (arr.length - 1) - mid ;
}