/**
 * 给定一个 完美二叉树 ，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。

初始状态下，所有 next 指针都被设置为 NULL。

 

示例 1：



输入：root = [1,2,3,4,5,6,7]
输出：[1,#,2,3,#,4,5,6,7,#]
解释：给定二叉树如图 A 所示，你的函数应该填充它的每个 next 指针，以指向其下一个右侧节点，如图 B 所示。序列化的输出按层序遍历排列，同一层节点由 next 指针连接，'#' 标志着每一层的结束。
示例 2:

输入：root = []
输出：[]
 

提示：

树中节点的数量在 [0, 212 - 1] 范围内
-1000 <= node.val <= 1000
 

进阶：

你只能使用常量级额外空间。
使用递归解题也符合要求，本题中递归程序占用的栈空间不算做额外的空间复杂度。
 */
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
// 层序遍历解题
function connect(root: Node | null): Node | null {
  if (!root) return root;
  const queue: Node[] = [];
  queue.push(root);
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const cur: any = queue.shift();
      cur.next = i !== len - 1 ? queue[0] : null;
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
    }
  }
  return root;
}

// 先序遍历思维模式解题
function connect2(root: Node | null): Node | null {
  if (!root) return root;
  // @ts-ignore: Node类型有歧义
  traverse(root.left, root.right);
  return root;
}
function traverse(node1, node2): void {
  if (node1 == null || node2 == null) {
    return;
  }
  node1.next = node2;
  traverse(node1.left, node1.right);
  traverse(node2.left, node2.right);
  traverse(node1.right, node2.left);
}
