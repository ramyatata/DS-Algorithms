/* Repeat a String

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
*/

function truncateString(str, num) {
  let result = str.substring(0, num);
  if(str.length > num){
    return result + '...';
  } else
    return result;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);


//o(n) = const
//space = const