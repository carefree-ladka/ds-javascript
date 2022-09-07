class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.hd = 0;
  }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.right.right.left = new Node(9);
root.right.right.right = new Node(8);

/* Construct the following tree
                  1
                /   \
               /     \
              2       3
             / \     / \
            4   5   6   7
                      /  \
                     9    8
*/

function bottomView(root) {
  if (!root) return;
  if (!root.left && !root.right) {
    console.log(root.val);
  }
  bottomView(root.left);
  bottomView(root.right);
}

// bottomView(root);

