/*
给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

注意：不能使用任何内置的 BigInteger 库或直接将输入转换为整数。

示例 1:

输入: num1 = "2", num2 = "3"
输出: "6"
示例 2:

输入: num1 = "123", num2 = "456"
输出: "56088"

*/
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if(num1==='0'||num2==='0')return '0';
    let sum = 0;
    for(let i = num1.length;i>0;i--){
        for(let j = num2.length;j>0;j--){
            let project = num1[i]*num2[j];
            sum+=project;
        }
    }
    return sum;
};
const res = multiply('2','3');
console.log(res)