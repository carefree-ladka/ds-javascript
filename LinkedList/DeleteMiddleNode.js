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
head.next.next.next.next.next = new Node(6);

function deleteMiddleNode(head) {
  let prev;
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    prev = slow; //prev will store the previous value of slow pointer
    slow = slow.next;
    fast = fast.next.next;
  }
  prev.next = slow.next; //set the previous.next to slow.next node
  return head;
}

console.log(
  JSON.stringify(deleteMiddleNode(head), null, 2) //4
);
