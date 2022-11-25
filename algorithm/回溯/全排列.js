/*
给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

示例 1：

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
示例 2：

输入：nums = [0,1]
输出：[[0,1],[1,0]]
示例 3：

输入：nums = [1]
输出：[[1]]
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const len = nums.length;
    const res = [];
    if(len === 0){
        return res;
    }
    // used数组的作用在于标识nums对应的哪些数已经使用，使用过则不再添加进path，否则会出现[1,1,1] [1,2,2]的重复数字出现的局面
    // 同时还要在递归时传入深度，作为入栈（推入结果数组）条件。
    // 全排列的本质为选择**本次递归**不重复的元素，因此used数组的存在至关重要
    const used = Array(len).fill(false);

    const dfs = (nums,len,depth,path,used,res)=>{
        if(depth===len){
            res.push([...path]);
            return;
        }
        for(let i = 0;i<len;i++){
            if(!used[i]){
                used[i] = true;
                path.push(nums[i]);
                console.log ('入栈  ',path);
                dfs(nums,len,depth+1,path,used,res);
                used[i] = false;
                path.pop()
                console.log ('出栈  ',path);

            }
        }
    }
    dfs(nums,len,0,[],used,res);
    return res;
};
const res = permute([1,2,3]);
console.log ('输出',res);