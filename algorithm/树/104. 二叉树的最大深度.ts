/**
 * 给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。

示例：
给定二叉树 [3,9,20,null,null,15,7]，

    3
   / \
  9  20
    /  \
   15   7
返回它的最大深度 3 。
 */
/**
 * Definition for a binary tree node.
 *  */

// 先序遍历
function reverse(root: TreeNode | null, depth: number): number {
  if (!root) return depth;
  return Math.max(
    reverse(root.left, depth + 1),
    reverse(root.right, depth + 1)
  );
}
function maxDepth(root: TreeNode | null): number {
  const depth = reverse(root, 0);
  return depth;
}

// 后序遍历
function maxDepth2(root: TreeNode | null): number {
  if (!root) return 0;
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);
  const res = Math.max(leftDepth, rightDepth) + 1;
  return res;
}
