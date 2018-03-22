/* Insertion Sort
Where a bubble sort relies on a number of small swaps, insertion sort relies on inserting a single element in the right for a given iteration. Every iteration through the collection leaves a greater segment sorted.
*/

function InsertionSort(arr, n) {
  //input - arr to be sorted, n = length of array
  //loop from second element, since first element is already sorted
  //take the value at index
    //compare it previous elements one. by one
    //if element is > target shift it by one place and reduce index(hole) value
    //if target element is less than current
    //insert the target at hole


  for(let i = 1; i < arr.length; i++){
    let target = arr[i];
    let hole = i;
    while(hole > 0 && arr[hole-1] > target){
      arr[hole] = arr[hole-1];
      hole = hole - 1;
    }
    arr[hole] = target;
  }
  return arr;
}

InsertionSort([7, 2, 4, 1, 5, 3])