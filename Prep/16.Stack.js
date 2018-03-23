/* stack */

function Node(val){
  this.value = val;
  this.next = null;
}

function Stack(){
  this.length = 0;
  this.head = null;
  this.tail = null;

  this.isEmpty = function() {
    return this.length == 0;
  }

  this.add = function(val) {
    var newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
    }
    if(this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
  }

  this.peek = function(){
    return this.tail.val;
  }

  this.remove = function(){
    let val = this.tail.val;
    tail = tail.next;
    this.length--;
    return val;
  }
}