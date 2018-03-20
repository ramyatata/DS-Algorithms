/*  Steamroller
Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(arr, r = []) {
  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])){
      steamrollArray(arr[i], r);
    } else {
      r.push(arr[i]);
    }
  }
  return r;
}

steamrollArray([1, [2], [3, [[4]]]]);

// o(n) = linear length of str
//space = linear