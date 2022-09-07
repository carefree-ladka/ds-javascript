/* 
1) Find the middle
2) Reverse right half 
3) Compare head and slow pointer 
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(2);
head.next.next.next.next = new Node(1);
head.next.next.next.next.next = new Node(5);

function reverse(head) {
  let prev = null;
  let curr = head;
  let follow = head;
  while (curr) {
    follow = follow.next;
    curr.next = prev;
    prev = curr;
    curr = follow;
  }
  return prev;
}
function isPalindrome(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  slow = reverse(slow); //[1,6,3] reverse right half
  while (slow) {
    if (slow.val !== head.val) return false;
    slow = slow.next;
    head = head.next;
  }
  return true;
}

console.log(isPalindrome(head)); //false
console.log(head);


//Solution 2
function palindrome(head) {
  const stack = [];
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    stack.push(slow.val);
    slow = slow.next;
    fast = fast.next.next;
  }
  if (fast !== null) {
    slow = slow.next;
  }
  while (slow) {
    let node = stack.pop();
    if (node!== slow.val) return false;
    slow = slow.next;
  }
  return true;
}

console.log(palindrome(head));
