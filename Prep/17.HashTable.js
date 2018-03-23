/* Hash Table */

function hash(string, max){
  let hash = 0;
  for(let i = 0; i < string.length; i++){
    hash += String.charCodeAt(i);
  }
  return hash % max;
}

function HashTable(){
  this.storage = [];
  this.maxLimit = 4;

  this.add = function(key, value) {
    let hashInd = hash(key, maxLimit);
    if(this.storage[hashIndex] === undefined){
      this.storage[hashIndex] = [[key, value]];
    } else {
      let inserted = false;
      for(let i=0; i < this.storage[hashIndex].length; i++) {
        if(this.storage[hashIndex][i][0] === key){
          this.storage[hashIndex][i][0] = value;
          inserted = true;
        }
      }
      if(!inserted){
        this.storage[hashIndex].push([key, value]);
      }
    }
  }

  this.remove = function(key){
    let hashInd = hash(key, maxLimit);
    if(this.storage[hashIndex].length === 1 && this.storage[hashIndex][0][0] === key){
      delete this.storage[hashIndex];
    } else {
      for(let i = 0; i < this.storage[hashIndex].length; i++){
        if(this.storage[hashIndex][i][0] === key){
          delete this.storage[hashIndex][i];
        }
      }
    }
  }

  this.lookup = function(key){
    let hashInd = hash(key, maxLimit);
    if(this.storage[hashIndex] === undefined){
      return undefined;
    } else {
      for(let i = 0; i < this.storage[hashIndex].length; i++){
        if(this.storage[hashIndex][i][0] === key){
          return this.storage[hashIndex][i][1];
        }
      }
    }
  }
}