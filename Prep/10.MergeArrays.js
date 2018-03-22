/* Given two sorted arrays of integers, combine the values into one sorted array?

Input: [1,3,5], [2,4,6,8,10]

Output: [1,2,3,4,5,6,8,10]

See if you can solve this in O(N+M) time and O(N+M) auxiliary space.
*/
function MergeArray(arr1, arr2){
  //input 0- 2 arr
  //output - one arr
  //const - o(N+M)

  //have two pointers pointing to start of both arrays
  //holder for result array
  //loop until p1<arr1.length and p2<arr2.length
    //if arr1[pointer1] < arr2[p2] push arr1[p1] and increement p1
    //else if if arr1[pointer1] > arr2[p2] push arr2[p2] and increement p2
    //else if both are equal push arr1[p1] and increement p1 and p2

  let results = [];
  let p1 = 0;
  let p2 = 0;

  while(p1 < arr1.length && p2 < arr2.length){
    if(arr1[p1] < arr2[p2]){
      results.push(arr1[p1]);
      p1++;
    } else if(arr1[p1] > arr2[p2]){
      results.push(arr2[p2]);
      p2++;
    } else if(arr1[p1] > arr2[p2]){
      results.push(arr2[p2]);
      p1++;
      p2++;
    }
  }
  console.log(p1, p2);
  if(p1 === arr1.length && p2 < arr2.length - 1){
     return [...results, ...arr2.splice(p2)];
  } else if(p2 === arr2.length  && p1 < arr1.length - 1){
    return [...results, ...arr1.splice(p1)];
  }

  return results;
}

MergeArray([1,3,5], [2,4,6,8,10])