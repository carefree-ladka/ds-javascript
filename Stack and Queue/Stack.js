//Stack using LinkedList
//Date :3/5/2022

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  push(data) {
    let newNode = new Node(data);
    let curr = this.head;
    newNode.next = curr;
    this.head = newNode;
    this.size++;
  }
  pop() {
    let curr = this.head;
    if (curr) {
      let elem = curr.next;
      curr = curr.next;
      this.head = curr;
      this.size--;
      return elem;
    }
  }
  peek() {
    if (this.head) return this.head.value;
  }
  isEmpty() {
    return this.size === 0;
  }
  clear() {
    this.head = null;
    this.size = 0;
  }
}

const s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.pop();
console.log(s.peek());
console.log(JSON.stringify(s, null, 2));
