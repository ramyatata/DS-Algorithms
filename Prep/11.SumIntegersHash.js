/* Given an array of integers, and a target value determine if there are two integers that add to the sum.

Input: [4,2,6,5,7,9,10], 13

Output: true */

function SumIntegersHash(arr, tar){
  //input - arr, tar
  //out - bool
  //constrinats - hash o(n)

  //holder for hash
  //loop through array
   //foreach item check if hash val exist
   //if exist return true
   //else create a property on hasTable with target-val

   //return false

   let obj = {};
   for(let i = 0; i < arr.length; i++){
    let prop = arr[i];
    if(obj[prop]) return true;
    obj[tar-prop] = true;
   }
   return false;
}

//o(n) = n
//space = n