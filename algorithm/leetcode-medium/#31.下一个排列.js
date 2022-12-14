/*
整数数组的一个 排列  就是将其所有成员以序列或线性顺序排列。

例如，arr = [1,2,3] ，以下这些都可以视作 arr 的排列：[1,2,3]、[1,3,2]、[3,1,2]、[2,3,1] 。
整数数组的 下一个排列 是指其整数的下一个字典序更大的排列。更正式地，如果数组的所有排列根据其字典顺序从小到大排列在一个容器中，那么数组的 下一个排列 就是在这个有序容器中排在它后面的那个排列。如果不存在下一个更大的排列，那么这个数组必须重排为字典序最小的排列（即，其元素按升序排列）。

例如，arr = [1,2,3] 的下一个排列是 [1,3,2] 。
类似地，arr = [2,3,1] 的下一个排列是 [3,1,2] 。
而 arr = [3,2,1] 的下一个排列是 [1,2,3] ，因为 [3,2,1] 不存在一个字典序更大的排列。
给你一个整数数组 nums ，找出 nums 的下一个排列。

必须 原地 修改，只允许使用额外常数空间。

示例 1：

输入：nums = [1,2,3]
输出：[1,3,2]
示例 2：

输入：nums = [3,2,1]
输出：[1,2,3]
示例 3：

输入：nums = [1,1,5]
输出：[1,5,1]
 
*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// []  [0]  [1,3,2]
var nextPermutation = function(nums) {
    for (let i = nums.length - 2; i >= 0; i--) {
        let n = nums[i];
        // 找到第一个比后面的数小的数（不是从最后一个依次轮询前面的，是前一个比后一个，这是上次解题失败的原因）
        if (nums[i] < nums[i + 1]) {
            let idx = i + 1;
            // 找出后面比n大的数当中的最小值，因为后面是**降序排列**所以一直判断是否比n大即可
            // 找和n差的最小的但是又要替换后让原数变大的一个（这个索引才是用来换位置的）
            /**
             * 难点一：和后面谁替换（不一定和后一个替换，和值最接近的替换） 比如 123465 应该4、5换位
             */
            while (nums[idx + 1] - n > 0) {
                idx++;
            }
            // 替换i与idx位置的数
            nums[i] = nums[idx];
            nums[idx] = n;
            // 此时i后面的是一个降序排列，将这个排列转为升序排列（后面所有数对称调换）
            let left = i + 1;
            let right = nums.length - 1;
            /**
             * 难点二：如何形成升序排列（需要察觉要素后面段为降序段，才能想到左右换位）
             */
            while (left < right) {
                // 左右交换
                [nums[left], nums[right]] = [nums[right], nums[left]];
                left++;
                right--;
            }
            break;
        } else if (i === 0) {
            nums.reverse()
        }
    }
};
const res = nextPermutation([4,2,0,2,3,2,0])
console.log(res)