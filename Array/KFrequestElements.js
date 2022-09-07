/* class Node {
  constructor() {
    this.key = 0;
    this.child = [];
  }
}

function newNode(key) {
  var temp = new Node();
  temp.key = key;
  return temp;
}

function depth(root) {
  
  if (!root) return 0;
  let maxDepth = Number.MIN_VALUE
  for (let ptr of root.child) {
    maxDepth = Math.max(maxDepth, depth(ptr));
  }
  return maxDepth + 1;
}

var root = newNode(10);
root.child.new Node()(newNode(20));
root.child.new Node()(newNode(30));
root.child[0].child.new Node()(newNode(25));
root.child[1].child.new Node()(newNode(35));
console.log(JSON.stringify(root, null, 2));

console.log(depth(root));
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const head = new Node(50);
head.next = new Node(20);
head.next.next = new Node(4);
head.next.next.next = new Node(15);
head.next.next.next.next = new Node(10);

/* Create loop for testing */
head.next.next.next.next.next = head.next.next;

// console.log(JSON.stringify(head, null, 2));

function printList(head) {
  let curr = head;
  while (curr) {
    console.log(curr.val);
    curr = curr.next;
  }
}
function dedectLoop(head) {
  let slow = head;
  let fast = head;
  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return fast;
  }
  return -1;
}

function getStartingNode(head) {
  let start = head;
  let fast = dedectLoop(head);
  while (start !== fast) {
    start = start.next;
    fast = fast.next;
  }
  return start;
}

// console.log(getStartingNode(head));

function removeLoop(head) {
  let startOfLoop = getStartingNode(head);
  let temp = startOfLoop;
  while (temp.next !== startOfLoop) {
    temp = temp.next;
  }
  temp.next = null;
}

// removeLoop(head);
printList(head)