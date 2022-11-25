/*
给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。

示例 1：

输入：nums1 = [1,3], nums2 = [2]
输出：2.00000
解释：合并数组 = [1,2,3] ，中位数 2
示例 2：

输入：nums1 = [1,2], nums2 = [3,4]
输出：2.50000
解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5

*/
var findMedianSortedArrays = function (nums1, nums2) {
    // 合并加sort暴力破解
    const mergeArr = nums1.concat(nums2);
    mergeArr.sort((a, b) => {
        return a - b;
    })
    // 合并数组后长度为偶
    if (mergeArr.length % 2 === 0) {
        return (mergeArr[mergeArr.length/2 - 1]+mergeArr[mergeArr.length/2])/2
    }
    else{
        return mergeArr[(mergeArr.length-1)/2]
    }
    // 二分查找
};
findMedianSortedArrays([1,2], [3,4])