var insertionSortList = function (head) {
  let dummy = new ListNode(0);
  let curr = head;
  while (curr) {
    prev = dummy;
    while (prev.next && prev.next.val < curr.val) prev = prev.next;
    next = curr.next;
    curr.next = prev.next;
    prev.next = curr;
    curr = next;
  }
  return dummy.next;
};
