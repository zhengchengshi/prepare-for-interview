/*
给定一个{*排序数组*}和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
示例 1:

输入: nums = [1,3,5,6], target = 5
输出: 2
示例 2:

输入: nums = [1,3,5,6], target = 2
输出: 1
示例 3:

输入: nums = [1,3,5,6], target = 7
输出: 4
示例 4:

输入: nums = [1,3,5,6], target = 0
输出: 0
示例 5:

输入: nums = [1], target = 0
输出: 0

*/

/*
    固定排序数组（升序||降序）查找可以考虑二分查找
*/
var searchInsert = function(nums, target) {
    // 暴力拆解
    // if(nums.indexOf(target)!==-1){
    //     return nums.indexOf(target)
    // }
    // else{
    //     let n = nums.length
    //     while(n!==0){
    //         if(target>nums[nums.length-1]){
    //             return n
    //         }
    //         if(target<nums[n]&&target>nums[n-1]){
    //             return n ;
    //         }
    //         n--;
    //     }
    //     return 0
    // }

    // 二分查找
    const n = nums.length;
    let left = 0, right = n - 1, ans = n;
    while (left <= right) {
        let mid = ((right - left) >> 1) + left;
        if (target <= nums[mid]) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return ans;

};
const res = searchInsert([1,3,5,6],7)
console.log(res)