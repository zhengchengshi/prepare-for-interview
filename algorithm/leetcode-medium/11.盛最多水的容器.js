/*
给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。

找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

返回容器可以储存的最大水量。

说明：你不能倾斜容器。

 

示例 1：
输入：[1,8,6,2,5,4,8,3,7]
输出：49 
解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。


示例 2：

输入：height = [1,1]
输出：1

*/
var maxArea = function(height) {
    // 双指针从两边往中间移动
    // 底边最长 * 最低的高
    // 较矮边需要移动 因为更有潜力
    let left = 0;
    let right = height.length - 1
    let maxAns = 0;
    while(left !== right){
        let area;
        if(height[left]>height[right]){
            area = (right - left) * height[right];
            right--;
        }
        else{
            area = (right - left) * height[left];
            left++;
        }
        maxAns = Math.max(area,maxAns);
    }
    // 两个for超时
    // console.log(table)
    // for(let left = 0;left<height.length;left++){
    //     for(let right = left;right<height.length;right++){
    //         let area = (right - left) * Math.min(height[left],height[right]);
    //         console.log(area)
    //         maxAns = Math.max(area,maxAns);
    //     }
        
    // }
    console.log(maxAns)
    return maxAns
};
maxArea([1,8,6,2,5,4,8,3,7])