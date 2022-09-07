class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const head = new Node(1);
head.next = new Node(10);
head.next.next = new Node(4);
head.next.next.next = new Node(2);
head.next.next.next.next = new Node(22);
head.next.next.next.next.next = new Node(15);
head.next.next.next.next.next.next = new Node(8);

function merge(h1, h2) {
  if (!h1 || !h2) return !h1 ? h2 : h1;
  if (h1.val < h2.val) {
    h1.next = merge(h1.next, h2);
    return h1;
  } else {
    h2.next = merge(h1, h2.next);
    return h2;
  }
}

function mergeSort(head) {
  if (!head || !head.next) return head;
  let slow = head;
  let fast = head;
  let prev = slow;
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prev.next = null; //separate list
  let h1 = mergeSort(head);
  let h2 = mergeSort(slow);
  return merge(h1, h2);
}

console.log(JSON.stringify(mergeSort(head), null, 2)); //1 2 4 8 15 22
