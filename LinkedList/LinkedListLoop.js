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

//Create a loop to test the function
head.next.next.next.next = head.next;

//Floyd's slow and fast pointer method
function hasLoop(head) {
  let slow = head;
  let fast = head;
  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return slow; //could return true here
  }
  return -1; //could return false here
}

// console.log(hasLoop(head)); //true

function getStartingNodeOfLoop(head) {
  let fast = hasLoop(head); //it'll give the fast pointer position in the loop
  let slow = head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
    if (slow === fast) return slow;
  }
}

// console.log(getStartingNodeOfLoop(head)); //2

function removeLoop(head) {
  let startNode = getStartingNodeOfLoop(head);
  let temp = startNode;
  while (temp.next !== startNode) {
    temp = temp.next;
  }
  temp.next = null;
}

removeLoop(head);
console.log(head);
