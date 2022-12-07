/**
 * 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。

你可以按 任何顺序 返回答案。

 

示例 1：

输入：n = 4, k = 2
输出：
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
示例 2：

输入：n = 1, k = 1
输出：[[1]]
 

提示：

1 <= n <= 20
1 <= k <= n
 */
function combine(n: number, k: number): number[][] {
  const res: number[][] = [];
  traverse([], res, 1, n, k);
  return res;
}
function traverse(
  path: number[],
  res: number[][],
  left: number,
  right: number,
  len: number
): void {
  if (path.length === len) {
    res.push([...path]);
    return;
  }
  for (let i = left; i <= right; i++) {
    path.push(i);
    traverse(path, res, 1 + i, right, len);
    path.pop();
  }
}
