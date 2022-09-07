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

//Iterative
function reverseLinkedList(head) {
  if (!head) return;
  let prev = null;
  let following = head;
  let curr = head;
  while (curr) {
    following = following.next;
    curr.next = prev;
    prev = curr;
    curr = following;
  }
  return prev;
}

// console.log(reverseLinkedList(head));

//Recursive
function reverseLL(head) {
  if (!head) return;
  if (!head.next) return head;
  let rest = reverseLL(head.next);
  head.next.next = head;
  head.next = null;
  return rest;
}

console.log(reverseLL(head, null, 2));
