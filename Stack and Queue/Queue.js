//Queue using LinkedList
//Date :3/5/2022

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  enqueue(data) {
    let newNode = new Node(data);
    if (!this.head) this.head = newNode;
    else {
      let curr = this.head;
      while (curr.next) curr = curr.next;
      curr.next = newNode;
    }
    this.size++;
  }
  dequeue() {
    let curr = this.head;
    if (curr) {
      let elm = curr.value;
      curr = curr.next;
      this.head = curr;
      this.size--;
      return elm;
    }
    return null;
  }
  front() {
    if (this.head) return this.head.value;
  }
  rear() {
    let curr = this.head;
    if (!curr) return null;
    while (curr.next) curr = curr.next;
    return curr.value;
  }
}

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
console.log(q.dequeue());
console.log(JSON.stringify(q, null, 2));
