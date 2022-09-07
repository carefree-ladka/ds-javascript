class Node {
  constructor(val = 0) {
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

/*   
            1
          /   \
         2     3
        / \      
       4   5   

==>Inorder: 4,2,5,1,3   (Left, Root, Right)
==>Preorder:1,2,4,5,3   (Root, Left, Right)
==>Postorder:4,5,2,3,1  (Left, Right, Root)
*/

/*Morris InOrder Traversal*/
function morrisInOrderTraversal(root) {
  let curr = root;
  while (curr !== null) {
    if (curr.left === null) {
      console.log(curr.val);
      curr = curr.right;
    } else {
      let pred = curr.left;
      while (pred.right && pred.right !== curr) {
        pred = pred.right;
      }
      if (pred.right === null) {
        pred.right = curr;
        curr = curr.left;
      } else {
        console.log(curr.val);
        pred.right = null;
        curr = curr.right;
      }
    }
  }
}

/*Morris PreOrder Traversal*/
function morrisPreOrderTraversal(root) {
  let curr = root;
  while (curr !== null) {
    if (curr.left === null) {
      console.log(curr.val);
      curr = curr.right;
    } else {
      let pred = curr.left;
      while (pred.right && pred.right !== curr) {
        pred = pred.right;
      }
      if (pred.right === null) {
        pred.right = curr;
        console.log(curr.val);
        curr = curr.left;
      } else {
        pred.right = null;
        curr = curr.right;
      }
    }
  }
}

/*Morris PostOrder Traversal*/
function morrisPostOrderTraversal(root) {
  let curr = root;
  let result = "";
  while (curr !== null) {
    if (curr.right !== null) {
      let temp = curr.right;
      while (temp.left && temp.left !== curr) temp = temp.left;
      if (temp.left === null) {
        temp.left = curr;
        result = curr.val.toString().padStart(2) + result;
        curr = curr.right;
      } else {
        temp.left = null;
        curr = curr.left;
      }
    } else {
      result = curr.val.toString().padStart(2) + result;
      curr = curr.left;
    }
  }
  return result;
}

var flatten = function (root) {
  let curr = root;
  while (curr) {
    if (curr.left) {
      let runner = curr.left;
      while (runner.right) runner = runner.right;
      runner.right = curr.right;
      curr.right = curr.left;
      curr.left = null;
    }
    curr = curr.right;
  }
};
// morrisInOrderTraversal(root);
// morrisPreOrderTraversal(root);
// console.log(morrisPostOrderTraversal(root));
flatten(root);
