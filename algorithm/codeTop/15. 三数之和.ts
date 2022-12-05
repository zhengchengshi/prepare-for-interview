/**
 * 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请

你返回所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

 

 

示例 1：

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
解释：
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
注意，输出的顺序和三元组的顺序并不重要。
示例 2：

输入：nums = [0,1,1]
输出：[]
解释：唯一可能的三元组和不为 0 。
示例 3：

输入：nums = [0,0,0]
输出：[[0,0,0]]
解释：唯一可能的三元组和为 0 。
 

提示：

3 <= nums.length <= 3000
-105 <= nums[i] <= 105
 */

/**
 * 算法的难点在于要跳过重复元素，如果只是跳过重复的i，会出现漏解的情况，因此需要在使用一次i之后，清算当前
 * 循环的所有可能解，然后在末尾跳过所有重复i
 */

/**
 *
 * @param nums: number[]
 * @returns number[][]
 */
function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  let left: number, right: number;
  const res: number[][] = [];
  for (let i = 0; i <= nums.length - 2; i++) {
    left = i + 1;
    right = nums.length - 1;
    if (nums[left] + nums[i] > nums[right]) continue;
    while (left < right) {
      const sum = nums[left] + nums[right] + nums[i];
      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else if (sum === 0) {
        console.log(i, left, right);
        res.push([nums[i], nums[left], nums[right]]);
        while (
          nums[left] === nums[left + 1] &&
          nums[right] === nums[right - 1]
        ) {
          left++;
          right--;
        }
        left++;
        right--;
      }
    }
    while (nums[i] === nums[i + 1]) i++;
  }
  return res;
}
