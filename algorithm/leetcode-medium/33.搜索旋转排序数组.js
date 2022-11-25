/*
整数数组 nums 按升序排列，数组中的值 互不相同 。

在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。

给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。


示例 1：

输入：nums = [4,5,6,7,0,1,2], target = 0
输出：4
示例 2：

输入：nums = [4,5,6,7,0,1,2], target = 3
输出：-1
示例 3：

输入：nums = [1], target = 0
输出：-1

要求 O(logn)
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 二分查找
var search = function(nums, target) {
    // let left = 0,right = nums.length - 1,mid;
    // while(left<=right){
    //     mid = Math.floor((left+right)/2)
    //     if(nums[mid]===target){
    //         return mid;
    //     }
    //     else if(nums[0]<nums[mid]&&target<nums[mid]){
    //         right = mid - 1;
    //     }
    //     else if(nums[0]<nums[mid]&&target>nums[mid]){
    //         left = mid + 1;
    //     }
    //     else if(nums[0]>nums[mid]&&target<nums[mid]){
    //         right = mid - 1;
    //     }
    //     else if(nums[0]<nums[mid]&&target<nums[mid]){
    //         left = mid + 1;
    //     }
    // }
    if (!nums.length) return -1
    let left = 0, right = nums.length - 1, mid
    while (left <= right) {
        mid = Math.floor((left+right)/2);        
        if(nums[mid]===target){
            return mid;
        }
        // 表明mid处于左区间
        if(nums[mid]>=nums[left]){
            // 如果target处于递增区间，则在递增区间中寻找
            if(target>=nums[left]&&target<nums[mid]){
                right = mid - 1;
            }
            // 如果比递增区间任何值都小，曾在右区间，指针向右指
            else{
                left = mid + 1;
            }
        }
        // 右区间
        else{
            // target在右递增区间
            if(target>nums[mid]&&target<=nums[right]){
                left = mid + 1;
            }
            // 比递增区间任何值都大，则在左区间
            else{
                right = mid - 1;
            }
        }
    }
    return -1

};
const res = search([4,5,6,7,0,1,2],0)
console.log(res)