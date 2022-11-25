/*
给定一个三角形 triangle ，找出自顶向下的最小路径和。

每一步只能移动到下一行中相邻的结点上。相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。

 

示例 1：

输入：triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
输出：11
解释：如下面简图所示：
   2
  3 4
 6 5 7
4 1 8 3
自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
示例 2：

输入：triangle = [[-10]]
输出：-10
*/
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    // 注意题目关键词——相邻
    // let res = 0;
    // for(let i = triangle.length-1;i>=0;i--){
    //     let min = Infinity;
    //     for(let j = triangle[i].length - 1;j>=0;j--){
    //         min = Math.min(min,triangle[i][j])
    //     }
    //     console.log(min)
    //     res += min;
    // }
    // return res
    // dp[i][j] = min(dp[i][j],dp[i][j]) + triangle[i][j]
    /**
     * 动态规划
     */
    let h = triangle.length;
    let dp = new Array(h+1).fill(0);
    for(let y = h-1; y>=0; y--) {
        for(let x = 0; x < triangle[y].length; x++) {
            dp[x] = Math.min(dp[x], dp[x+1]) + triangle[y][x];
        }
    }
    return dp[0];
};
const res = minimumTotal([[-1],[2,3],[1,-1,-3]])
console.log(res)