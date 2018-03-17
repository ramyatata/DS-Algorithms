/* Return Largest Numbers in Arrays

Return an array consisting of the largest number from each provided sub-array
*/

function largestOfFour(arr) {
  // You can do this!
  return arr.map((set)=>{
    let highestNumber = set[0];
    set.forEach((num)=>{
      if(highestNumber < num){
        highestNumber = num;
      }
    });
    return highestNumber;
  });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//o(n) = linear
//space = const