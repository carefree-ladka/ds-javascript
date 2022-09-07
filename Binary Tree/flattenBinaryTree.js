/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

//  w/ Morris Traversal:
//  The best result for the code below is 84ms / 40.6MB (beats 96% / 66%).

var flatten = function (root) {
  let curr = root;
  while (curr) {
    if (curr.left) {
      let runner = curr.left;
      while (runner.right) runner = runner.right;
      (runner.right = curr.right), (curr.right = curr.left), (curr.left = null);
    }
    curr = curr.right;
  }
};
//  w/ O(1) Space:
//  The best result for the code below is 80ms / 40.6MB (beats 98% / 66%).

var flatten = function (root) {
  let head = null,
    curr = root;
  while (head != root) {
    if (curr.right === head) curr.right = null;
    if (curr.left === head) curr.left = null;
    if (curr.right) curr = curr.right;
    else if (curr.left) curr = curr.left;
    else (curr.right = head), (head = curr), (curr = root);
  }
};
// w/ Recursion:
//The best result for the code below is 84ms / 40.6MB (beats 96% / 66%).

var flatten = function (root) {
  let head = null;
  const revPreOrder = (node) => {
    if (node.right) revPreOrder(node.right);
    if (node.left) revPreOrder(node.left);
    (node.left = null), (node.right = head), (head = node);
  };
  if (root) revPreOrder(root);
};
