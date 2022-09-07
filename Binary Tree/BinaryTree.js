class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

const BFS = (root) => {
  const queue = [root];
  while (queue.length) {
    let curr = queue.shift();
    console.log(curr.val);
    if (curr.right) queue.push(curr.right);
    if (curr.left) queue.push(curr.left);
  }
};

// BFS(A);

// const DFS = (root) => {
//   const stack = [root];
//   while (stack.length) {
//     let curr = stack.pop();
//     console.log(curr.val);
//     if (curr.right) stack.push(curr.right);
//     if (curr.left) stack.push(curr.left);
//   }
// };
// DFS(A);

const inOrder = (root) => {
  //LEFT, SELF, RIGHT
  if (!root) return null;
  inOrder(root.left);
  console.log("in", root.val);
  inOrder(root.right);
};

// inOrder(A);

const preOrder = (root) => {
  // SELF, LEFT, RIGHT
  if (!root) return null;
  console.log("pre", root.val);
  preOrder(root.left);
  preOrder(root.right);
};

// preOrder(A);

const postOrder = (root) => {
  //LEFT, RIGHT, SELF
  if (!root) return null;
  postOrder(root.left);
  postOrder(root.right);
  console.log(root.val);
};

// postOrder(A);

const searchElement = (root, target) => {
  if (!root) return false;
  let left = searchElement(root.left, target);
  let right = searchElement(root.right, target);
  return root.val === target || left || right;
};

// console.log(searchElement(A, 1));

const DFS = (root) => {
  if (!root) return null;
  console.log(root.val);
  DFS(root.left);
  DFS(root.right);
};
// DFS(A);

const LCA = (root, p, q) => {
  if (!root) return null;
  if (root.val === q || root.val === q) return root;
  let left = LCA(root.left, p, q);
  let right = LCA(root.right, p, q);
  if (left && right) return root;
  return left ? left : right;
};

/* Construct the following tree
                  1
                /   \
               /     \
              2       3
             / \     / \
            4   5   6   7
*/

const reverseLevelOrderTraversal = (root) => {
  if (!root) return null;
  const stack = [];
  const queue = [root];
  while (queue.length) {
    let curr = queue.shift();
    if (curr.right) queue.push(curr.right);
    if (curr.left) queue.push(curr.left);
    stack.push(curr);
  }
  while (stack.length) {
    console.log(stack.pop().val);
  }
};
// console.log(LCA(A, 4, 5));
// reverseLevelOrderTraversal(A);

const treeLeafNodes = (root) => {
  if (!root) return;
  let sum = 0;
  const stack = [root];
  while (stack.length) {
    let curr = stack.pop();
    if (curr.left) stack.push(curr.left);
    if (curr.right) stack.push(curr.right);
    if (curr.left === null && curr.right === null) {
      // console.log(curr.val);
      sum += curr.val;
    }
  }
  console.log(sum);
};
// treeLeafNodes(A);
const leftView = (root, elements = [], level = 0) => {
  if (!root) return;
  if (level === elements.length) {
    elements.push(root.val);
  }
  leftView(root.left, elements, level + 1);
  leftView(root.right, elements, level + 1);
  return elements;
};

// leftView(A, 1);

let max_level = 0;
const rightView = (root, level = 1) => {
  if (!root) return;
  if (max_level < level) {
    console.log(root.val);
    max_level = level;
  }
  rightView(root.left, level + 1);
  rightView(root.right, level + 1);
};

//https://www.educative.io/answers/what-is-zigzag-tree-traversal
const zigzagTraversal = (root) => {
  if (!root) return;
  let curr = [root];
  let next = [];
  let flag = true;
  while (curr.length) {
    let temp = curr.pop();
    console.log(temp.val);
    if (flag) {
      if (temp.left) next.push(temp.left);
      if (temp.right) next.push(temp.right);
    } else {
      if (temp.right) next.push(temp.right);
      if (temp.left) next.push(temp.left);
    }
    if (!curr.length) {
      flag = !flag;
      [curr, next] = [next, curr];
    }
  }
};

// zigzagTraversal(A);

const invertBinaryTree = (root) => {
  if (root) {
    [root.left, root.right] = [root.right, root.left];
    invertBinaryTree(root.left);
    invertBinaryTree(root.right);
  }
};

// invertBinaryTree(root);
// preOrder(root);

const iterativeInvert = (root) => {
  if (!root) return;
  const queue = [root];
  while (queue.length) {
    let curr = queue.shift();
    [curr.left, curr.right] = [curr.right, curr.left];
    if (curr.right) queue.push(curr.right);
    if (curr.left) queue.push(curr.left);
  }
};

// iterativeInvert(root);
// preOrder(root);
// console.log(leftView(root, [], 0));

