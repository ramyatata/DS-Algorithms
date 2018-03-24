/* findComplements
If the input array has complement values show in results
input - [1, -2, 6, 7, -1, 4, 2, 8]
then result should be [1, 2]
 */

function complementNumbers(arr){
  let obj = {};
  let results = [];
  for(let i = 0; i < arr.length; i++){
    if(obj[arr[i]] === undefined){
      let compliment = (-1)*arr[i];
      obj[compliment] = true;
    } else {
      if(arr[i] < 0){
        results.push((-1)*arr[i]);
      } else {
        results.push(arr[i]);
      }
    }
  }
  return results;
}

//time complexity  - o(n)
//space complexity - o(1)