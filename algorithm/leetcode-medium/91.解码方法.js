/*
一条包含字母 A-Z 的消息通过以下映射进行了 编码 ：

'A' -> "1"
'B' -> "2"
...
'Z' -> "26"
要 解码 已编码的消息，所有数字必须基于上述映射的方法，反向映射回字母（可能有多种方法）。例如，"11106" 可以映射为：

"AAJF" ，将消息分组为 (1 1 10 6)
"KJF" ，将消息分组为 (11 10 6)
注意，消息不能分组为  (1 11 06) ，因为 "06" 不能映射为 "F" ，这是由于 "6" 和 "06" 在映射中并不等价。

给你一个只含数字的 非空 字符串 s ，请计算并返回 解码 方法的 总数 。

题目数据保证答案肯定是一个 32 位 的整数。

 

示例 1：

输入：s = "12"
输出：2
解释：它可以解码为 "AB"（1 2）或者 "L"（12）。
示例 2：

输入：s = "226"
输出：3
解释：它可以解码为 "BZ" (2 26), "VF" (22 6), 或者 "BBF" (2 2 6) 。
示例 3：

输入：s = "0"
输出：0
解释：没有字符映射到以 0 开头的数字。
含有 0 的有效映射是 'J' -> "10" 和 'T'-> "20" 。
由于没有字符，因此没有有效的方法对此进行解码，因为所有数字都需要映射。
*/

/**
 * @param {string} s
 * @return {number}
 */

// dp[i] = dp[i-1] + 2?1?0
var numDecodings = function(s) {
    // 不完全的动态规划，想要手动进行动态规划是不可取的，原先思路是不断递推dp数组，新的增加数由条件进行判断，但是这种方法不准确
    // 思维误区主要是以为dp当前位加的数通过条件能固定下来，实际上dp[i]的值取决于能不能与前位结合
    // 如果把加不加1 减不减1的思路换为加不加前位dp值 回不回滚前位dp，思路就对了
    // if(s==='0'){
    //     return 0
    // }
    // else if(s.length===1){
    //     return 1
    // }
    // const strArr = Array.from(s,x=>parseFloat(x))
    // const dp = [ 1 ];
    // for(let i = 1; i<strArr.length;i++){
    //     let num ;
    //     if(strArr[strArr.length-1]===0&&strArr[strArr.length-2]<=2){
    //         num = -1;
    //     }
    //     else if(strArr[strArr.length-1]===0&&strArr[strArr.length-2]>2){
    //         return 0
    //     }
    //     else if(strArr[strArr.length-1]>6&&strArr[strArr.length-2]<=2){
    //         num = 0
    //     }
    //     else if(strArr[strArr.length-1]>6&&strArr[strArr.length-2]>2){
    //         num = -1;
    //     }
    //     else if(strArr[strArr.length-1]<=6&&strArr[strArr.length-2]>2){
    //         num = 0;
    //     }
    //     else if(strArr[strArr.length-1]<=6&&strArr[strArr.length-2]<=2){
    //         num = 1;
    //     }
    //     dp[i] = dp[i-1] + num;
    // }
    // return dp[strArr.length-1]
    
    // 本题真正的动态规划可以使用最后一个数能不能结合前一个数组成新字母进行判断
    // 分三类情况进行判断
    // 遍历当前位为0，遍历前一位为1 或 2，此时当前位不能单独存在，但可以依赖前一位进行结合，所以方法数回滚到前一位之前的一位
    // dp[i] = dp[i-2]
    // 如果当前位为0且前一位大于2，则该字符无法结合.
    //  return 0
    // 如果前一位为1 则当前位为任意数都可以结合前一位且自己独立存在，故可得
    // dp[i] = dp[i-1] + dp[i-2];
    // 如果前一位为2 则当前位当前仅大于0小于6时能同上
    // dp[i] = dp[i-1]+ dp[i-2]
    const n = s.length;
    const f = new Array(n + 1).fill(0);
    f[0] = 1;
    for (let i = 1; i <= n; ++i) {
        if (s[i - 1] !== '0') {
            f[i] += f[i - 1];
        }
        if (i > 1 && s[i - 2] != '0' && ((s[i - 2] - '0') * 10 + (s[i - 1] - '0') <= 26)) {
            f[i] += f[i - 2];
        }
    }
    return f[n];
};
const res = numDecodings('12')
console.log(res)