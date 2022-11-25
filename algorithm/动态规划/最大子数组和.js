/*
给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

子数组 是数组中的一个连续部分。
示例 1：

输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
示例 2：

输入：nums = [1]
输出：1
示例 3：

输入：nums = [5,4,-1,7,8]
输出：23

*/

// 走完这一生 如果我和你在一起会变得更好，那我们就在一起，否则我就丢下你。 我回顾我最光辉的时刻就是和不同人在一起，变得更好的最长连续时刻

var maxSubArray = function(nums) {
    // 动态规划
    // 动态规划方程 : f(i)=max{f(i−1)+nums[i],nums[i]}
    // 主要考虑 nums[i] 单独成为一段还是加入 f(i−1) 对应的那一段，
    // 如果nums[i]大，就单独成段 进行后续比较
    
    let pre = 0,maxAns = nums[0]
    nums.map(item=>{
        pre = Math.max(item,pre+item);
        // 需要的是整个遍历过程中最大的值，
        // 仅是pre可能会因为后续的运算而减少
        console.log(pre)
        maxAns = Math.max(pre,maxAns);
    })
    return maxAns
};

const res = maxSubArray([-2,1,-3,4,-1,2,1,-5,4])
console.log(res)