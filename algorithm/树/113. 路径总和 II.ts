/**
 * 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。

叶子节点 是指没有子节点的节点。

 

示例 1：


输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
输出：[[5,4,11,2],[5,8,4,5]]
示例 2：


输入：root = [1,2,3], targetSum = 5
输出：[]
示例 3：

输入：root = [1,2], targetSum = 0
输出：[]
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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  if (!root) return [];
  const res: number[][] = [];
  helper(root, targetSum, res, [], 0);
  return res;
}
function helper(
  root: TreeNode | null,
  targetSum: number,
  resArr: number[][],
  curArr: number[],
  cur: number
): void {
  if (!root) {
    return;
  }
  curArr.push(root.val);
  if (!root.left && !root.right && targetSum === cur + root.val)
    resArr.push([...curArr]);
  helper(root.left, targetSum, resArr, curArr, cur + root.val);
  helper(root.right, targetSum, resArr, curArr, cur + root.val);
  curArr.pop();
}
