class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(2);
head.next.next.next = new Node(2);
head.next.next.next.next = new Node(3);
head.next.next.next.next.next = new Node(4);
head.next.next.next.next.next.next = new Node(5);

function removeDuplicates(head) {
  if (!head || !head.next) return head;
  let curr = head;
  while (curr && curr.next) {
    if (curr.next && curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
}

console.log(JSON.stringify(removeDuplicates(head), null, 2));
