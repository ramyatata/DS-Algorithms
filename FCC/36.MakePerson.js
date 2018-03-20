/*  Make a Person
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

/*Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.
*/

  var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  let firstName = firstAndLast.split(' ')[0];
  let lastName = firstAndLast.split(' ')[1];
  let firstLast = firstAndLast;

  this.getFirstName = function() {
    return firstName;
  };
  this.getLastName = function() {
    return lastName;
  };
  this.getFullName = function() {
    return firstLast;
  };
  this.setFirstName = function(first) {
    firstName = first;
    firstLast = firstName + ' ' + lastName;
  };
  this.setLastName = function(last) {
    lastName = last;
    firstLast = firstName + ' ' + lastName;
  };
  this.setFullName= function(firstAndLast){
    firstLast = firstAndLast;
    firstName = firstLast.split(' ')[0];
    lastName = firstLast.split(' ')[1];
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();

