/**
 * @param {Number} K
 * K is the length of the queue
 *  */

class CircularQueue {
  size = 0;
  front = 0;
  constructor(K) {
    this.K = K;
    this.queue = Array(K);
    this.rear = K - 1;
  }

  enQueue = (value) => {
    if (this.isFull()) return false;
    this.rear = ++this.rear % this.K;
    this.queue[this.rear] = value;
    this.size++;
    return true;
  };

  deQueue = () => {
    if (this.isEmpty()) return false;
    this.front = ++this.front % this.K;
    this.size--;
    return true;
  };

  Front = () => (this.isEmpty() ? -1 : this.queue[this.front]);

  Rear = () => (this.isEmpty() ? -1 : this.queue[this.rear]);

  isEmpty = () => this.size === 0;

  isFull = () => this.size === this.K;
}

const cq = new CircularQueue(4);
cq.enQueue(1);
cq.enQueue(2);
cq.enQueue(3);
cq.enQueue(4);
cq.deQueue();
console.log(cq.queue); //[ 1, 2, 3, 4 ]
console.log(cq.Front()); //2
console.log(cq.Rear()); //4
console.log(cq.isEmpty()); //false
console.log(cq.isFull()); //false
