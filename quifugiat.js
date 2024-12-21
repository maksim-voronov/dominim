function leastCommonAncestor(root, p, q) {
  if (!root) return null;
  if (root === p || root === q) return root;
  let left = leastCommonAncestor(root.left, p, q);
  if (left) return left;
  return leastCommonAncestor(root.right, p, q);
}
