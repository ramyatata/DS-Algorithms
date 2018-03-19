/* Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
*/


function destroyer(arr) {
  let args = Array.prototype.slice.call(arguments);

  let numbers = args.slice(0, 1)[0];

  for(let i = 1; i < args.length; i++){
    let target = args[i];
    let ind = numbers.indexOf(target);

    while(ind !== -1) {
      numbers.splice(ind, 1);
      ind = numbers.indexOf(target);
    }
  }
  return numbers;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


// o(n) = linear length of args
//space = constant