/*
给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

 

示例 1：

输入：nums = [1,2,3]
输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
示例 2：

输入：nums = [0]
输出：[[],[0]]
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 子集实则为组合的一种
var subsets = function(nums) {
    const res = [[]];
    const len = nums.length;
    if(len === 0){
        return res;
    }
    const dfs = (subRes,begin)=>{
        if(subRes.length===len){
            return;
        }
        for(let i = begin;i<len;i++){
            subRes.push(nums[i]);
            console.log ('入栈  ',subRes);
            res.push([...subRes]);
            // begin是有当前循环的索引决定的，不是由begin自身
            // 传入begin的目的在于使下一次搜索结果与之前的结果不同
            dfs(subRes,i+1);
            subRes.pop();
            console.log ('出栈  ',subRes);
        }
    }
    dfs([],0);
    console.log (res);
};
const res = subsets([1,2,3]);
console.log (res);