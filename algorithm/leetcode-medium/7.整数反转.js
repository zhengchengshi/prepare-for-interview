/*
给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

假设环境不允许存储 64 位整数（有符号或无符号）。
 

示例 1：

输入：x = 123
输出：321
示例 2：

输入：x = -123
输出：-321
示例 3：

输入：x = 120
输出：21
示例 4：

输入：x = 0
输出：0

*/
var reverse = function(x) {
    let res;
    if(x>=0){
        res = parseInt(x.toString().split("").reverse().join(""))
    }
    else{
        res = - parseInt((-x).toString().split("").reverse().join(""))
    }
    // 溢出检测 
    if(res>Math.pow(2,31)-1 || res<-Math.pow(2,31)){
        res = 0
    }
    console.log(res)
    return res
};
reverse(1534236469)