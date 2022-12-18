/**
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为：

一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。

 

示例 1：


输入：root = [3,9,20,null,null,15,7]
输出：true
示例 2：


输入：root = [1,2,2,3,3,null,null,4,4]
输出：false
示例 3：

输入：root = []
输出：true
 */
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function isBalanced(root: TreeNode | null): boolean {
  if (!root) return true;
  let maxGap = 0;
  getDepth(root);
  function getDepth(root: TreeNode | null): number {
    if (!root) return 0;
    const leftDepth = getDepth(root.left);
    const rightDepth = getDepth(root.right);
    maxGap = Math.max(Math.abs(leftDepth - rightDepth), maxGap);
    return Math.max(leftDepth, rightDepth) + 1;
  }
  return maxGap <= 1;
}
