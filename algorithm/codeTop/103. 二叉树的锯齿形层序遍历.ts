/**
 * 给你二叉树的根节点 root ，返回其节点值的 锯齿形层序遍历 。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

 

示例 1：


输入：root = [3,9,20,null,null,15,7]
输出：[[3],[20,9],[15,7]]
示例 2：

输入：root = [1]
输出：[[1]]
示例 3：

输入：root = []
输出：[]
 

提示：

树中节点数目在范围 [0, 2000] 内
-100 <= Node.val <= 100
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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  const res: number[][] = [];
  const queue = [root];
  let flag = true;
  while (queue.length) {
    const len = queue.length;
    let temp: number[] = [];
    for (let i = 0; i < len; i++) {
      const cur: TreeNode = queue.shift()!;
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);

      if (flag) temp.push(cur.val);
      else temp.unshift(cur.val);
    }
    flag = !flag;
    res.push(temp);
  }
  return res;
}
