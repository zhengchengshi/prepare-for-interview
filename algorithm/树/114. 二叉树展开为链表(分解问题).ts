/**
 * 给你二叉树的根结点 root ，请你将它展开为一个单链表：

展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
展开后的单链表应该与二叉树 先序遍历 顺序相同。
 

示例 1：


输入：root = [1,2,5,3,4,null,6]
输出：[1,null,2,null,3,null,4,null,5,null,6]
示例 2：

输入：root = []
输出：[]
示例 3：

输入：root = [0]
输出：[0]
 

提示：

树中结点数在范围 [0, 2000] 内
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

/**
 Do not return anything, modify root in-place instead.
 */
// 很棒的使用分解问题逻辑处理问题的方式
// 虽然没有返回值，但是仍然需要明确函数的定义，用这个定义去处理左右树枝把root转为单条链表
// 只要知道 flatten 的定义如此并利用这个定义，让每一个节点做它该做的事情，然后 flatten 函数就会按照定义工作。
function flatten(root: TreeNode | null): void {
  // base case
  if (root == null) return;

  // 利用定义，把左右子树拉平
  flatten(root.left);
  flatten(root.right);

  /**** 后序遍历位置 ****/
  // 1、左右子树已经被拉平成一条链表
  let left = root.left;
  let right = root.right;

  // 2、将左子树作为右子树
  root.left = null;
  root.right = left;

  // 3、将原先的右子树接到当前右子树的末端
  let p = root;
  while (p.right != null) {
    p = p.right;
  }
  p.right = right;
}
