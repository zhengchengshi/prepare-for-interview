/*
给你一个字符串 s，找到 s 中最长的回文子串。
示例 1：

输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
示例 2：

输入：s = "cbbd"
输出："bb"

*/
function check(strParam){
    for(let i = 0;i<Math.floor(strParam.length/2);i++){
        if(strParam[i]!==strParam[strParam.length-1-i]){
            return false;
        }
    }
    return true
}
// 暴力枚举，判断回文
var longestPalindrome = function(s) {
    const len = s.length;
    let res = ''
    let str = ''

    for(let i = 0;i<len;i++){
        for(let j = i+1;j<=len;j++){
            str = s.substring(i,j);
            if(check(str)&&str.length>res.length){
                res = str;
            }
        }
    }
    return res;
};
// var longestPalindrome = function (s) {
//     /**
//      * 
//      * 
//      * 逻辑出错 误以为只用一次遍历比较两边就行
//      * 实则还是应该重开一个新数组使用抽屉思维
//      * 
//      * 
//      */

//     // 本想用抽屉思维 但无法判断回文
//     // const strArr = s.split('');
//     // let flag = strArr.length - 1;
//     // let maxArr = [];
//     // let condition;
//     // if(s.length===1){
//     //     return s
//     // }
//     // // 分奇偶
//     //     while (flag !== 0) {
//     //         let n = 0;
//     //         let chacheArr = []
    
//     //         // 中间向两边展开
//     //         // 没到头或没到尾
            
//     //         while((flag + n !== strArr.length)&&(flag - n >= 0)){
//     //             if(s.length % 2 === 0){
//     //                 // condition = (strArr[strArr.length - n - 1] === strArr[n])
//     //                 // console.log(n)
//     //                 // console.log(condition)
//     //             }
//     //             else{
//     //                 condition = (strArr[flag+n]===strArr[flag-n])
//     //             }
//     //             if(strArr[flag+n]===strArr[flag-n]){
//     //                 if(n===0){
//     //                     chacheArr.push(strArr[flag+n])
//     //                 }
//     //                 else{
//     //                     // 尾插
//     //                     chacheArr.push(strArr[flag+n])
//     //                     // 头插
//     //                     chacheArr.unshift(strArr[flag-n])
//     //                 }
//     //                 // console.log(strArr[flag-n])
//     //             }
//     //             else{
//     //                 // if(strArr[flag]===strArr[flag-1]&&strArr[flag-1]){
//     //                 //     chacheArr = [strArr[flag-1],strArr[flag]]
//     //                 // }
//     //                 // console.log(chacheArr);
//     //                 // if(chacheArr.length>maxArr.length){
//     //                 //     maxArr = chacheArr;
//     //                 // }
//     //                 // 重置缓存
//     //                 n = 0;
//     //                 break;
//     //             }
//     //             n++
//     //             if(chacheArr.length>maxArr.length){
//     //                 maxArr = chacheArr
//     //             }
//     //         }
            
//     //         flag--;
            
//     //     }
    
//     // console.log(maxArr.join(""))
// };
// longestPalindrome("cbbcd")