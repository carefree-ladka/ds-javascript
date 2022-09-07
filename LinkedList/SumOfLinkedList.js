class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

function sumOfLinkedList(head) {
  let sum = 0;
  let curr = head;
  while (curr) {
    sum += curr.val;
    curr = curr.next;
  }
  return sum;
}

console.log(sumOfLinkedList(head));
