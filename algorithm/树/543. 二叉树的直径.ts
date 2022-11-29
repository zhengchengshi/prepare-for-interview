/**
 * 给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。

 

示例 :
给定二叉树

          1
         / \
        2   3
       / \     
      4   5    
返回 3, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。
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
let ans: number;
function getMaxLength(root: TreeNode): number {
  if (root === null) return 0;
  const leftDepth = getMaxLength(root.left!);
  const rightDepth = getMaxLength(root.right!);
  ans = Math.max(ans, leftDepth + rightDepth + 1);
  return Math.max(leftDepth, rightDepth) + 1;
}
function diameterOfBinaryTree(root: TreeNode | null): number {
  ans = 1;
  getMaxLength(root as TreeNode);
  return ans - 1;
}
