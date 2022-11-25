/*给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。

示例 1：

输入：x = 121
输出：true
示例 2：

输入：x = -121
输出：false
解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
示例 3：

输入：x = 10
输出：false
解释：从右向左读, 为 01 。因此它不是一个回文数。
示例 4：

输入：x = -101
输出：false

提示：

-231 <= x <= 231 - 1*/
// 翻转字符串
var isPalindrome = function(x) {
    // const str = x.toString()
    // const strArr = str.split('');
    // // debugger;
    // for(let i = 0;i<(strArr.length/2);i++){
    //     if(strArr[i]!==strArr[strArr.length-1-i]){
    //         console.log(false)
    //         return false
    //     }
    // }
    // console.log(true)

    // return true;
    // 直接翻转，省去遍历
    return x.toString() == x.toString().split('').reverse().join('')
};
isPalindrome(121)
// 余数重组
var isPalindrome = function(x) {
    if(x < 0 || (x % 10 == 0 && x!= 0)) return false
    let temp = 0, s = x
    // 逐一取出每个数位的数，进行翻转后比较
    while(s){
        temp = temp * 10 + s % 10
        s = Math.floor(s/10)
    }
    return x === temp
};
isPalindrome(1212)