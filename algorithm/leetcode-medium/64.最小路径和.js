/*
给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

说明：每次只能向下或者向右移动一步。

示例 1：


输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
输出：7
解释：因为路径 1→3→1→1→1 的总和最小。
示例 2：

输入：grid = [[1,2,3],[4,5,6]]
输出：12
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
// f[i][j] = Math.min(f[i][j-1],f[i-1][j]) + grid[i][j]
// f[0][0] = grid[0][0]
var minPathSum = function(grid) {
    const raws = grid.length;
    const columns = grid[0].length;
    
    for(let i = 0;i<raws;i++){
        for(let j = 0;j<columns;j++){
            if(i===0&&j>=1){
                grid[i][j] = grid[i][j-1] + grid[i][j];
            }
            else if(j===0&&i>=1){
                grid[i][j] = grid[i-1][j] + grid[i][j];
            }
            else if(i!==0&&j!==0){
                grid[i][j] = Math.min(grid[i-1][j],grid[i][j-1])+grid[i][j];
            }
        }
    }
    return grid[raws-1][columns-1];
};
const res = minPathSum([[1,3,1],[1,5,1],[4,2,1]]);
console.log(res)