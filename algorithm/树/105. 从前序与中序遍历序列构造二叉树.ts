/**
 * 给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。

 

示例 1:


输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
输出: [3,9,20,null,null,15,7]
示例 2:

输入: preorder = [-1], inorder = [-1]
输出: [-1]
 

提示:

1 <= preorder.length <= 3000
inorder.length == preorder.length
-3000 <= preorder[i], inorder[i] <= 3000
preorder 和 inorder 均 无重复 元素
inorder 均出现在 preorder
preorder 保证 为二叉树的前序遍历序列
inorder 保证 为二叉树的中序遍历序列
 */
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  // 使用原有的函数定义递归，简单粗暴，但是每次都要slice，效果并不理想
  // if(preorder.length<1) return null;
  // const pivot = inorder.indexOf(preorder[0]);
  // const leftInorder = inorder.slice(0,pivot);
  // const rightInorder = inorder.slice(pivot+1);
  // return new TreeNode(preorder[0],buildTree(preorder.slice(1,leftInorder.length+1),leftInorder),buildTree(preorder.slice(leftInorder.length+1),rightInorder))

  // 新方法创建了一个辅助函数，改变了函数定义，让我们通过传递索引找到pivot，新老方法的本质其实都一样，都是能让下次递归找到切割元素，但是新方法省略了slice，效果提升很多
  return build(
    preorder,
    0,
    preorder.length - 1,
    inorder,
    0,
    inorder.length - 1
  );
}
function build(
  preorder: number[],
  preStart: number,
  preEnd: number,
  inorder: number[],
  inStart: number,
  inEnd: number
): TreeNode | null {
  if (preStart > preEnd) {
    return null;
  }

  // root 节点对应的值就是前序遍历数组的第一个元素
  let rootVal = preorder[preStart];
  // rootVal 在中序遍历数组中的索引
  let index = inorder.indexOf(rootVal);

  let leftSize = index - inStart;

  // 先构造出当前根节点
  const root = new TreeNode(rootVal);
  // 递归构造左右子树
  root.left = build(
    preorder,
    preStart + 1,
    preStart + leftSize,
    inorder,
    inStart,
    index - 1
  );

  root.right = build(
    preorder,
    preStart + leftSize + 1,
    preEnd,
    inorder,
    index + 1,
    inEnd
  );
  return root;
}
