/*  Linked List
*/
function Node(val){
  this.val = val;
  this.next = null;


}

function LinkedList(){
  this.head = null;
  this.tail = null;

  this.add = function(value){
    var node = new Node(value);
    if(this.head === null){
      this.head = node;
    }
    if(this.tail !== null){
      this.tail.next = node;
    }
    this.tail = node;
  }

  this.removeAt = function(index){
    let i = 0;
    let currentNode = this.head;
    let prev = null;
    while(currentNode !== null && i < index){
      prev = currentNode;
      currentNode = currentNode.next;
    }
    if(prev === null){
      this.head = currentNode.next;
    } else {
      prev.next = currentNode.next;
    }
  }
}



// o(n) = linear length of str
//space = constant