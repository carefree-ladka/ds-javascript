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
root.right.left = new Node(5);
root.right.right = new Node(6);
root.right.left.left = new Node(7);
root.right.left.right = new Node(8);

/* Construct the following tree
                    1
                 /    \
               2       3
             /      /    \
            4      5      6
                  / \
                 /   \
                7     8
        */

function inOrder(root) {
  if (root == null) return;
  let curr = root;
  const stack = [];
  while (curr !== null || stack.length) {
    if (curr !== null) {
      stack.push(curr);
      curr = curr.left;
    } else {
      curr = stack.pop();
      console.log(curr.val);
      curr = curr.right;
    }
  }
}

// inOrder(root);

function preOrder(root) {
  if (root == null) return;
  const stack = [root];
  while (stack.length) {
    let curr = stack.pop();
    console.log(curr.val);
    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }
}

// preOrder(root);

function preOrder(root) {
  if (root == null) return;
  let curr = root;
  const stack = [root];
  while (stack.length) {
    if (curr !== null) {
      console.log(curr.val);
      if (curr.right) stack.push(curr.right);
      curr = curr.left;
    } else curr = stack.pop();
  }
}

// preOrder(root);

function postOrder(root) {
  const stack = [];
  let curr = root;
  let prev = null;

  while (curr !== null || stack.length) {
    if (curr) {
      stack.push(curr);
      curr = curr.left;
    } else {
      curr = stack.at(-1);
      if (!curr.right || curr.right === prev) {
        console.log(curr.val);
        stack.pop();
        prev = curr;
        curr = null;
      } else curr = curr.right;
    }
  }
}

postOrder(root);
