//Connect all nodes at the same level

class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
    this.next = null;
  }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

var connect = function (root) {
  let curr = root;
  let next;
  if (root) {
    next = root.left;
  } else {
    next = null;
  }
  while (curr && next) {
    curr.left.next = curr.right;
    if (curr.next) {
      curr.right.next = curr.next.left;
    }
    curr = curr.next;
    if (!curr) {
      curr = next;
      next = curr.left;
    }
  }
  return root;
};

console.log(connect(root));

/* Construct the following tree
                   1
                /    \
              2       3
             / \     / \
            4   5   6   7
*/
