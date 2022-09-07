/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

const getKth = (curr, k) => {
  while (curr && k > 0) {
    curr = curr.next;
    k--;
  }
  return curr;
};
var reverseKGroup = function (head, k) {
  let dummy = new ListNode(0, head);
  let groupPrev = dummy;
  while (true) {
    let kth = getKth(groupPrev, k);
    if (!kth) break;
    let groupNext = kth.next;
    //reverse group
    let prev, curr;
    [prev, curr] = [kth.next, groupPrev.next];
    while (curr !== groupNext) {
      let temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }
    //Adjusting pointers
    temp = groupPrev.next;
    groupPrev.next = kth;
    groupPrev = temp;
  }
  return dummy.next;
};
