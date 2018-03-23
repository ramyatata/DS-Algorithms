/* Queue */
class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  peek = () => {
   return this.tail.val;
  }

  add = (val) => {
    let node = new Node(val);
    if(!this.head) this.head = node;
    if(!this.tail) this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  remove = () => {
    let data = this.head.val;
    this.head = this.head.next;
    if(!this.head){
      this.tail = null;
    }
    this.length--;
    return data;
  }

  isEmpty = () => {
    return this.length == 0;
  }
}