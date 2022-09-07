/* HashSet has been used for this problem:
 */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const head = new Node(1);
head.next = new Node(8);
head.next.next = new Node(8);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(3);
head.next.next.next.next.next = new Node(10);
head.next.next.next.next.next.next = new Node(5);

function removeDuplicates(head) {
  const lset = new Set();
  let prev = null;
  if (!head || !head.next) return head;
  let curr = head;
  while (curr) {
    if (lset.has(curr.val)) {
      prev.next = curr.next;
    } else {
      lset.add(curr.val);
      prev = curr;
    }
    curr = prev.next;
  }
  return head;
}

console.log(JSON.stringify(removeDuplicates(head), null, 2));

//Time :O(N)
//Space :O(N)