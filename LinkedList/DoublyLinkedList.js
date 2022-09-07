class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  #nullifyHead = () => {
    let newNode = new Node(value);
    if (this.length === 1) {
      this.head = newNode;
      this.tail = newNode;
    }
  };

  #setHead = (value) => {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    }
  };

  push = (value) => {
    let newNode = new Node(value);
    this.#setHead(value);
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  };

  pop = () => {
    if (!this.head) return -1;
    let poppedNode = this.tail;
    this.#nullifyHead();
    this.tail = poppedNode.prev;
    this.tail.next = null;
    poppedNode.prev = null;
    this.length--;
    return poppedNode;
  };

  shift = () => {
    if (this.length === 0) return -1;
    this.#nullifyHead();
    let oldHead = this.head;
    this.head = oldHead.next;
    oldHead.next = null;
    this.head.prev = null;
    this.length--;
    return oldHead;
  };

  unshift = (value) => {
    let newNode = new Node(value);
    this.#setHead(value);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  };

  getAtIndex = (idx) => {
    if (idx < 0 || idx >= this.length) return -1;
    let current = this.head;
    let count = 0;
    if (idx <= this.length / 2) {
      while (count !== idx) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== idx) {
        current = current.prev;
        count--;
      }
    }
    return current;
  };

  set = (idx, val) => {
    let foundNode = this.getAtIndex(idx);
    if (foundNode !== -1) {
      foundNode.val = val;
      return true;
    }
    return false;
  };
}

const list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
// console.log(list.pop());
// console.log(list.shift());
// console.log(list);
// console.log(list.getAtIndex(3));
// console.log(list.set(1,10));
console.log(list);

