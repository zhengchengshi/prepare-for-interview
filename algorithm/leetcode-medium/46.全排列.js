/*
给定一个*不含重复数字*的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

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
    const used = Array(len).fill(false);

    const dfs = (nums,len,depth,path,used,res)=>{
        if(depth===len){
            // 一定要进行浅拷贝，因为传入的值是引用
            res.push([...path]);
            return;
        }
        for(let i = 0;i<len;i++){
            if(!used[i]){
                // 已选择过（已入栈）的元素再后续选择中不会再被选中
                used[i] = true;
                path.push(nums[i]);
                console.log ('入栈  ',path);
                dfs(nums,len,depth+1,path,used,res);
                // 元素出栈时恢复元素在后续搜索中被选择的权力
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