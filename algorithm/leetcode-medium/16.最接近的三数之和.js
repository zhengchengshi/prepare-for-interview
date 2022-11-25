/**
 * 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。

返回这三个数的和。

假定每组输入只存在恰好一个解。

 

示例 1：

输入：nums = [-1,2,1,-4], target = 1
输出：2
解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
示例 2：

输入：nums = [0,0,0], target = 1
输出：0

* 
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    // 初始化为任意大数
    let res = Infinity;
    nums.sort((a,b)=>{return (a-b)});
    for(let i = 0;i<nums.length-1;i++){
        let left = i+1,right = nums.length -1;
        while(left<right){
            let sum = nums[i]+nums[left]+nums[right]
            if(Math.abs(sum - target) < Math.abs(res - target)){
                res = sum;
            }
            if(sum<target){
                left++;
            }
            if(sum>target){
                right--;
            }
            if(sum===target){
                return suresm
            }
        }
    }
    return res;

};
threeSumClosest([-1,2,1,-4],1)