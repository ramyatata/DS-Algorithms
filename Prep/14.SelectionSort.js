/* Selection sort
https://www.youtube.com/watch?v=GUDLRan2DWM
*/

function SelectionSort(arr){
  //input = arr
  //output = sorted arrray
  //constraints = in memory sort

  //loop from i=0 to length of array
    //for each loop
    //let elelemt at i be val1
    //let min set to val1
    // let index = i;
    //loop from i to n-1 to find min in remaing array
      // if element is less than val1
      // update min and index
    //swap val1 with element at index


  for(let i = 0; i < arr.length; i++) {
    let ind = i;
    let min = arr[i];
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[i]){
        ind = j;
        min = arr[j];
      }
    }
    arr[ind] = arr[i];
    arr[i] = min;
  }
  return arr;
}

SelectionSort([5, 2, 4, 8, 1, 9, 6]);