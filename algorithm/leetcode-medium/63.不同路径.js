/*
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish”）。

现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？

网格中的障碍物和空位置分别用 1 和 0 来表示。

示例 1：

输入：obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
输出：2
解释：3x3 网格的正中间有一个障碍物。
从左上角到右下角一共有 2 条不同的路径：
1. 向右 -> 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右 -> 向右

示例 2：

输入：obstacleGrid = [[0,1],[0,0]]
输出：1

*/
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
// f[m][n] = f[m-1][n] + f[m][n-1]
var uniquePathsWithObstacles = function(obstacleGrid) {
    // if(obstacleGrid == null || obstacleGrid.length == 0){
    //     return 0
    // }

    const rows = obstacleGrid.length;
    const columns = obstacleGrid[0].length;
    const f = [];
    for(let i = rows;i>0;i--){
        f.push(Array(columns).fill(0))
    }
    for (let i = 0; i < rows && obstacleGrid[i][0] == 0; i++) {
        f[i][0] = 1;
    }
    for (let j = 0; j < columns && obstacleGrid[0][j] == 0; j++) {
        f[0][j] = 1;
    }
    console.log(f)
    for(let i = 1;i<rows;i++){
        for(let j = 1;j<columns;j++){
            // 没有障碍物的条件
            if(obstacleGrid[i][j]===0){
                f[i][j] = f[i-1][j] + f[i][j-1];
            }
        }
    }
    return f[rows-1][columns-1]

    // if (obstacleGrid == null || obstacleGrid.length == 0) {
    //     return 0;
    // }
    
    // // 定义 dp 数组并初始化第 1 行和第 1 列。
    // let m = obstacleGrid.length, n = obstacleGrid[0].length;
    // const dp = [];
    // for(let i = m;i>0;i--){
    //     dp.push(Array(n).fill(0))
    // }
    // for (let i = 0; i < m && obstacleGrid[i][0] == 0; i++) {
    //     dp[i][0] = 1;
    // }
    // for (let j = 0; j < n && obstacleGrid[0][j] == 0; j++) {
    //     dp[0][j] = 1;
    // }
    // // 根据状态转移方程 dp[i][j] = dp[i - 1][j] + dp[i][j - 1] 进行递推。
    // for (let i = 1; i < m; i++) {
    //     for (let j = 1; j < n; j++) {
    //         if (obstacleGrid[i][j] == 0) {
    //             dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    //         }
    //     }
    // }
    // return dp[m - 1][n - 1];

};
const res = uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]);
console.log(res)