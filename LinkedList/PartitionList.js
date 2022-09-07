/* 
1) Keep two sub lists left and right
2) Traverse the entire list and compare head.val with x 
3) If head.val is less than x , add it to left or right
4) In the end Add the left.next =rightDummyNode.next and right.next=null( since it'd be pointing to 
next node))
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let left = new ListNode();
  let right = new ListNode();
  let leftTail = left;
  let rightTail = right;
  while (head) {
    if (head.val < x) {
      leftTail.next = head;
      leftTail = leftTail.next;
    } else {
      rightTail.next = head;
      rightTail = rightTail.next;
    }
    head = head.next;
  }
  leftTail.next = right.next;
  rightTail.next = null;
  return left.next;
};

//Time :O(N)
//Space : O(1)
