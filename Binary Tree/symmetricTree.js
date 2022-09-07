var isSymmetric = function (root) {
  return root && isMirror(root.left, root.right);
};

const isMirror = (p, q) => {
  if (!p && !q) return true;
  if (!p || !q) return false;
  return (
    p.val === q.val && isMirror(p.left, q.right) && isMirror(p.right, q.left)
  );
};
