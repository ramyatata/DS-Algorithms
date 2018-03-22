/*  ArrayLists
Implement a dynamic Array
*/

function ArrayList(initalLength) {
  this.length = 0;
  this.array = new Array(initalLength);
  this.add = function(val){
    if(this.length == this.array.length){
      this.grow();
    }
    this.array[this.length++] = val;
  }

  this.grow = function(){
    var original = this.array;
    this.array = new Array(this.array.length * 2);
    for(let i = 0; i < original.length; i++){
      this.array[i] = original[i];
    }
  }
}

// o(n) = linear length of str
//space = constant