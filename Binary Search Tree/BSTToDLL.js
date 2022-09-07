class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class DLL {
  constructor() {
    this.root = null;
    this.head = null;
    this.tail = null;
  }
  BSTToDLL = (root) => {
    if (!root) return;
    this.inorder(root.left);
    if (this.head === null) {
      this.head = this.tail = root;
    } else {
      this.tail.right = root;
      root.left = this.tail;
      this.tail = root;
    }
    this.inorder(root.right);
  };
  print = () => {
    let curr = this.head;
    while (curr) {
      console.log(curr.val);
      curr = curr.right;
    }
  };
}

const dll = new DLL();
const root = new Node(5);
root.right = new Node(10);
root.right.right = new Node(15);
root.right.right.left = new Node(14);
root.left = new Node(4);

dll.inorder(root);
console.log(dll.root);
dll.print();
