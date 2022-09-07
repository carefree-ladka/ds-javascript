/* 

//Merge with Divide And Conquer
//Time : O(NlogK)
//Space : O(1)

Intuition & Algorithm:
This approach walks alongside the one above but is improved a lot. We don't need to traverse most nodes many times repeatedly
Pair up k lists and merge each pair.
After the first pairing, k lists are merged into k/2 lists with average 2N/k length, then k/4, k/8 and so on.
Repeat this procedure until we get the final sorted linked list.
Thus, we'll traverse almost NN nodes per pairing and merging, and repeat this procedure about log2k times.
 */

var mergeKLists = function (lists) {
  if (!lists.length) return null;
  function merge(left, right) {
    if (!left) return right;
    if (!right) return left;
    if (left.val < right.val) {
      left.next = merge(left.next, right);
      return left;
    }
    right.next = merge(left, right.next);
    return right;
  }

  function recurse(start, end) {
    if (start === end) return lists[start];
    const mid = Math.floor((start + end) / 2);
    const left = recurse(start, mid);
    const right = recurse(mid + 1, end);
    return merge(left, right);
  }
  return recurse(0, lists.length - 1);
};
