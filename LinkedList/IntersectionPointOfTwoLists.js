class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const head1 = new Node(1);
head1.next = new Node(2);
head1.next.next = new Node(3);
head1.next.next.next = new Node(10);
head1.next.next.next.next = new Node(15);

//second list
const head2 = new Node(5);
head2.next = new Node(7);

// link tail of the second list to the fourth node (10) of the first list
head2.next.next = head1.next.next.next;

function intersectionPoint(h1, h2) {
  if (!h1 || !h2) return;
  let curr1 = h1;
  let curr2 = h2;
  while (curr1 !== curr2) {
    curr1 = curr1.next;
    curr2 = curr2.next;
    if (curr1 === curr2) return curr1.val;
    if (!curr1) curr1 = h2;
    if (!curr2) curr2 = h1;
  }
  return curr1.val;
}

console.log(intersectionPoint(head1, head2)); //10

//Time : O(M+N)
//Space : O(1)
