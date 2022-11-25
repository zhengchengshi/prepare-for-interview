/*
给定一个*可包含重复数字*的序列 nums ，按任意顺序 返回所有不重复的全排列。

示例 1：

输入：nums = [1,1,2]
输出：
[[1,1,2],
 [1,2,1],
 [2,1,1]]
示例 2：

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 经典剪枝
var permuteUnique = function(nums) {
    const len = nums.length;
    const res = [];
    if(len === 0){
        return res;
    }
    const path = [];
    const used = Array(len).fill(false)
    const dfs = (path,depth,used)=>{
        if(depth===len){
            res.push([...path]);
            return;
        }
        for(let i = 0;i<len;i++){
            // 搜索的数也和上一次一样，但是上一次的 1 刚刚被撤销，正是因为刚被撤销，下面的搜索中还会使用到，因此会产生重复，剪掉的就应该是这样的分支。
            // 剪枝条件：i > 0 是为了保证 nums[i - 1] 有意义
            // 写 !used[i - 1] 是因为 nums[i - 1] 在深度优先遍历的过程中刚刚被撤销选择
            // used[i]用于判断nums[i]和nums[i-1]是否是同一层
            // 有点问题...
            if (i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) {
                continue;
            }
            if(!used[i]){
                path.push(nums[i]);
                console.log ('入栈  ',path);

                used[i] = true;
                dfs(path,depth+1,used);
                path.pop();
                console.log ('出栈  ',path);
                used[i] = false
            }
        }
    }
    dfs(path,0,used);
    console.log (res);
    // 强制去重
    // for(let i = 0;i<res.length;i++){
    //     res[i] = JSON.stringify(res[i]);
    // }
    // const setRes = new Set(res)
    // const reverseRes = [...setRes]
    // for(let i = 0;i<reverseRes.length;i++){
    //     reverseRes[i] = JSON.parse(reverseRes[i])
    // }
    // return reverseRes
};
const res = permuteUnique([1,1,2]);
console.log (res);