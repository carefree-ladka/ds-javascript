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

/* Construct the following tree
                  1
                /   \
               /     \
              2       3
             / \     / \
            4   5   6   7
*/



function topView(root) {
  if (!root) return;
  const queue = [root];
  let map = new Map();
  let hd = 0;
  root.hd = hd;

  while (queue.length) {
    root = queue[0];
    hd = root.hd;
    if (!map.has(hd)) {
      map.set(hd, root.val);
    }
    if (root.left) {
      root.left.hd = hd - 1;
      queue.push(root.left);
    }
    if (root.right) {
      root.right.hd = hd + 1;
      queue.push(root.right);
    }
    queue.shift();
  }
  const arr = Array.from(map).sort((a, b) => a[0] - b[0]);
  for (let [_, value] of arr.values()) {
    console.log(value);
  }
}

topView(root);
