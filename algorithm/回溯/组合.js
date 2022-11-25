/*
给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。

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
*/
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

// 组合的本质在于**整个递归**都不出现重复元素，解决方案为在下一次递归中传入和上轮递归的相关标记，用于本轮递归和本轮递归中止的判断
// 因此选择begin标志，将本轮横向遍历的索引传给下一轮递归 如[1,2,3]的初始数组 [1,2,3]回溯后下轮 结果便为 [1,3] 因为有begin的标识 传入了索引1 下一轮就从2开始（即末尾） 
// 有效避免了重复元素出现 

// 数组长度为n，树路径长为k
// 全排列使用used数组，组合使用begin。
// 经典组合问题
var combine = function(n, k) {
    const res = [];
    let begin = 0
    
    if(k===0){
        return res;
    }
    const path = [];
    const dfs = (begin)=>{
        // 路径达到指定长度后出栈
        if(path.length===k){
            res.push([...path]);
            return;
        }
        for(let i = begin;i<n;i++){
            path.push(i+1);
            console.log ('入栈  ',path);
            dfs(i+1);
            path.pop();
            console.log ('出栈  ',path);
        }
    }
    dfs(begin);
    console.log (res);
    // const used = Array(k).fill(false);
    // const dfs = (depth)=>{
    //     if(depth===k){
    //         res.push([...path]);
    //         return;
    //     }
    //     for(let i = 0;i<n;i++){
    //         used[i] = true;
    //         path.push(fillArr[i]);
    //         dfs(depth+1);
    //         used[i] = false;
    //         path.pop();
    //     }
    // }
    // dfs(0);
    // console.log (res);
};
const res = combine(4,2);
console.log (res);