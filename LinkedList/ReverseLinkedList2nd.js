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

function reverseLinkedList2nd(head, m, n) {
  let curr = head;
  let prev = null;
  if (!head || !head.next) return head;
  let i = 0;
  for (i = 1; i < m; i++) {
    prev = curr;
    curr = curr.next;
  }
  let rtail = curr;
  let rhead = null;
  while (i <= n) {
    let nxt = curr.next;
    curr.next = rhead;
    rhead = curr;
    curr = nxt;
    i++;
  }
  if (prev) {
    prev.next = rhead;
  } else head = rhead;
  rtail.next = curr;
  return head;
}

console.log(JSON.stringify(reverseLinkedList2nd(head, 2, 5)));
