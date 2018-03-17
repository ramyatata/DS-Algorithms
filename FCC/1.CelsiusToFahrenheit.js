/* Convert Celsius to Fahrenheit
The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
*/

function convertToF(celsius) {
  let fahrenheit;
  fahrenheit = ((9/5)*celsius)+32;
  return fahrenheit;
}

convertToF(30);

//o(n) = constant
//space = constant
