/* Sort a Bit Array
Given a bit array, return it sorted in-place (a bit array is simply an array that contains only bits, either a 1 or a 0).

See if you can solve this in O(N) time and O(1) auxiliary space.
*/

function SortBitArray(arr){
  //input - bit arrary
  //output - arr (sorted)
  //constraints - o(N) and space O(1)

  //Need two pointers
  //assign leftPointer = 0;
  //assign right pointer to array.length-1;
  //keep increement left pointer and decreement right pointer until left < right
    //while incrementing left pointer check if val is equal to 0
    //while decrementing right pointer check if val is equal to 1
    //if not then swap the values

  let left = 0;
  let right = arr.length - 1;

  while(left < right) {
    while(arr[left] === 0){
      left++;
    }
    while(arr[right] === 1){
      right--;
    }
    if(left < right){
      [arr[left], arr[right]] = [arr[right], arr[left]];
    }
  }
  return arr;
}