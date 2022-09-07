/* 
1)Add a dummy node in the beginning
2) Move right by n steps
3) Move left and right until right is null
4) Left will end up being at n-1th position
5 left.next=left.next.next will delete the nth node
 */

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

function removeNthNodeFromEnd(head, n) {
  let dummy = new Node(0, head);
  let left = dummy;
  let right = head;

  while (n > 0 && right) {
    right = right.next;
    n--;
  }

  while (right) {
    left = left.next;
    right = right.next;
  }

  //delete the node at nth position
  left.next = left.next.next;
  return dummy.next;
}

console.log(removeNthNodeFromEnd(head, 3)); //1 3 4

//Time :  O(N)
//Space : O(1)
