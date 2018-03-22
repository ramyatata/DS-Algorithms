/*  Bubble Sort
Bubble sort is the most basic way to sort a collection. It works by sequentially going through your array and comparing two values at a time, swapping them if necessary. It then repeats the process until no swaps are required.
*/

function BubbleSort(arr) {
  //input array
  //output arr
  //constraints - only integers

  //holder for swap variable
  //loop through the array
   //for each iteration compare i and i+1 ele
   // if i > i+1 , store i+1 in temp variable
   // swap the values
   // set swap vaiable to true

  let swap = true;
  while(swap) {
    swap = false;
    for(let i = 0; i < arr.length; i++){
      if(arr[i] > arr[i+1]){
        let temp = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = temp;
        swap = true;
      }
    }
  }
  return arr;
}

BubbleSort([7, 4, 5, 2, 9, 1]);

// o(n) = quadratic
//space = constant