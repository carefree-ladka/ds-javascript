/* ES6 Generator For Binary Tree Traversals*/
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/*          1
          /   \
        2       3
               /
              4

dfs: [ 1, 2, 3, 4 ]
InOrder: [ 2, 1, 4, 3 ]
preOrder: [ 1, 2, 3, 4 ]
postOrder: [ 2, 4, 3, 1 ]
bfs: [ 1, 2, 3, 4 ]
bottom view: [ 2, 4 ]
*/

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.right.left = new Node(4);

//DFS Traversals

function* dfs(root) {
  if (!root) return;
  const stack = [root];
  while (stack.length) {
    let curr = stack.pop();
    yield curr.val;
    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }
}

function* inOrder(root) {
  if (!root) return;
  yield* inOrder(root.left);
  yield root.val;
  yield* inOrder(root.right);
}

function* preOrder(root) {
  if (!root) return;
  yield root.val;
  yield* preOrder(root.left);
  yield* preOrder(root.right);
}

function* postOrder(root) {
  if (!root) return;
  yield* postOrder(root.left);
  yield* postOrder(root.right);
  yield root.val;
}

//BFS
function* bfs(root) {
  if (!root) return;
  const queue = [root];
  while (queue.length) {
    let curr = queue.shift();
    yield curr.val;
    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }
}


function* bottomView(root) {
  if (!root) return;
  if (root.left === null && root.right === null) {
    yield root.val;
  }
  yield* bottomView(root.left);
  yield* bottomView(root.right);
}

console.log("dfs:", [...bfs(root)]);
console.log("InOrder:", [...inOrder(root)]);
console.log("preOrder:", [...preOrder(root)]);
console.log("postOrder:", [...postOrder(root)]);
console.log("bfs:", [...bfs(root)]);
console.log("bottom view:", [...bottomView(root)]);

