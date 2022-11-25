/*
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

 

示例 1：

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
示例 2：

输入：nums = []
输出：[]
示例 3：

输入：nums = [0]
输出：[]

*/
var threeSum = function(nums) {
    const resArr = [];
    if(nums == null || nums.length < 3) return resArr;
    // 排序
    nums.sort((a,b)=>{
        return a - b
    })
    for(let i = 0;i<nums.length;i++){
        // 每次循环都需要让right重置
        let left = i+1,right = nums.length - 1;
        // 首个元素大于0，则sum不可能为0
        if(nums[i]>0){
            break;
        }
        // 跳过重复的左值针
        if(i > 0 && nums[i] == nums[i-1]) continue;
        while(left<right){
            const sum = nums[left]+nums[right]+nums[i]
            if(sum>0){
                right--;
            }
            if(sum<0){
                left++;
            }
            if(sum === 0){
                resArr.push([nums[i],nums[left],nums[right]]);
                while (left<right && nums[left] == nums[left+1]) left++; // 结果成立时遇见重复数据仍要去重，避免下轮循环产生重复元素
                while (left<right && nums[right] == nums[right-1]) right--; // 去重
                // 左右指针向中间靠
                left++;
                right--;
            }
        }    
    }
    console.log(resArr)
};
threeSum([-1,0,1,2,-1,-4])