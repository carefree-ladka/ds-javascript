class Node {
  //BST Node
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  //BST class
  constructor(value) {
    this.root = new Node(value);
  }
  add(elem) {
    let newNode = new Node(elem);
    const searchTree = (node) => {
      if (elem < node.value) {
        if (!node.left) node.left = newNode;
        else searchTree(node.left);
      } else if (elem > node.value) {
        if (!node.right) node.right = newNode;
        else searchTree(node.right);
      }
    };
    searchTree(this.root);
  }

  inorder(root) {
    if (!root) return;
    this.inorder(root.left);
    console.log(root.value);
    this.inorder(root.right);
  }

  preorder(root) {
    if (!root) return;
    console.log(root.value);
    this.preorder(root.left);
    this.preorder(root.right);
  }

  postorder(root) {
    if (!root) return;
    this.postorder(root.left);
    this.postorder(root.right);
    console.log(root.value);
  }

  sumOfNodes(root) {
    if (!root) return 0;
    let left = this.sumOfNodes(root.left);
    let right = this.sumOfNodes(root.right);
    return left + right + root.value;
  }

  printLeftView(root, level, map) {
    if (!root) return;
    if (!(level in map)) map[level] = root.value;
    this.printLeftView(root.left, level + 1, map);
    this.printLeftView(root.right, level + 1, map);
  }

  showLeftView(root) {
    let map = {};
    this.printLeftView(root, 1, map);
    for (let key in map) console.log(map[key]);
  }

  height(root) {
    if (!root) return 0;
    let left = this.height(root.left);
    let right = this.height(root.right);
    return Math.max(left, right) + 1;
  }

  //Level Order Traversal
  BFS() {
    let queue = [this.root];
    while (queue.length) {
      let temp = queue.shift();
      console.log(temp.value);
      if (temp.left) queue.push(temp.left);
      if (temp.right) queue.push(temp.right);
    }
  }
}

const bst = new BST(5);
const bst2 = new BST(5);
const elements = [1, 2, 3, 4, 6, 7, 8];
const element = [1, 2, 3, 4, 6, 7, 8];

for (let i = 0; i < elements.length; i++) bst.add(elements[i]);
for (let i = 0; i < element.length; i++) bst2.add(element[i]);

bst.inorder(bst.root);
console.log("");
bst.preorder(bst.root);
console.log("");
bst.postorder(bst.root);
console.log(bst);
console.log("sum of nodes", bst.sumOfNodes(bst.root));
bst.showLeftView(bst.root);
console.log("height", bst.height(bst.root)); //5
bst.BFS();

function checkIfTwoIdentical(root1, root2) {
  if (!root1 && !root2) return true;
  if (root1 && root2)
    return (
      root1.value === root2.value &&
      checkIfTwoIdentical(root1.left, root2.left) &&
      checkIfTwoIdentical(root1.right, root2.right)
    );

  return false;
}

console.log(checkIfTwoIdentical(bst.root, bst2.root)); //true

