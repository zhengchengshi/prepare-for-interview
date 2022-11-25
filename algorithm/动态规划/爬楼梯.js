/*
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

 

示例 1：

输入：n = 2
输出：2
解释：有两种方法可以爬到楼顶。
1. 1 阶 + 1 阶
2. 2 阶
示例 2：

输入：n = 3
输出：3
解释：有三种方法可以爬到楼顶。
1. 1 阶 + 1 阶 + 1 阶
2. 1 阶 + 2 阶
3. 2 阶 + 1 阶
*/
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // 经典动态规划
    // 递归超时
    // if(n===0) return 0;
    // switch (n) {
    //     case 1:
    //         return 1
    //         break;
    //     case 2:
    //         return 2
    //         break;
    //     default:
    //         return climbStairs(n - 1) + climbStairs(n - 2)
    //         break;
    // }
    
    // 动态数组实现同台规划
    const emptyArr = []
    emptyArr[1] = 1;
    emptyArr[2] = 1;
    for(let i = 3;i<n;i++){
        emptyArr[i] = emptyArr[i-1] + emptyArr[i-2]
    }
    return emptyArr[n]; 
    /**
     * 可以考虑直接使用数学方法
     * 本质还是符合动态规划方程，但可以直接两个两个的累加，也可以使用通项公式
     */
    let p = 0,q = 0,r = 1;
    for(let i = n;i>0;i--){
        p = q;
        q = r;
        r = p + q;
    }
    return r;
};

/**
 * 题解
 * 动态规划类似于斐波那契，是自后往前考虑的。例如对于最后一步爬到第10阶楼梯有两种方式，从第9阶爬1阶，从第8阶爬2阶。
    那么到达第10阶的方法数等于到第9、8阶之和。F(10)=F(9)+F(8)，F(9）与F(8)就是F(10)的最优子结构
 * 
 */