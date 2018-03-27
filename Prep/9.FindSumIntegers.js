/* Given a sorted array of integers and a target value, determine if there exists two integers in the array that sum up to the target value.

See if you can solve this in O(N) time and O(1) auxiliary space. Use pointer methods to solve this*/


function findSum(arr, tar) {
  let left = 0;
  let right = arr.length-1;
  let sum = 0;
  while(left < right && sum !== tar) {
    sum = arr[left] + arr[right];
    if(sum < tar){
      left++;
    }
    if(sum > tar){
      right--;
    }
  }
  if(sum === tar){
    return true;
  } else {
    return false;
  }
}

findSum([1, 2, 3, 4, 7, 9, 10], 20);


