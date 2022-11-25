/*
给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

 

示例 1:

输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
*/
// 滑动窗口
// 双指针
// 判断数组中是否包含某元素可以使用哈希集合
var lengthOfLongestSubstring = function(s) {
    // const strArr = s.split('');
    // let temporaryArr = []; 
    // let maxAns = 0;
    // let slow = 0;
    // for(let fast = 0;fast < strArr.length;fast++){
    //     if(temporaryArr.includes(strArr[fast])){
    //         // 慢指针++
    //         slow++;
    //         // 快指针回溯
    //         fast = slow;
    //         // 重置临时数组
    //         temporaryArr = [strArr[slow]];
    //     }
    //     else{
    //         temporaryArr.push(strArr[fast]);
    //     }
    //     console.log(temporaryArr)
    //     maxAns = Math.max(maxAns,temporaryArr.length)
    // }
    // console.log(maxAns)
    const strArr = s.split('');
    const table = new Map()
    let maxAns = 0;
    let slow = 0;
    for(let fast = 0;fast < strArr.length;fast++){
        if(table.has(strArr[fast])){
            // 慢指针++
            slow++;
            // 快指针回溯
            fast = slow;
            // 重置hashMap
            table.clear()
            table.set(strArr[slow])
        }
        else{
            table.set(strArr[fast],true)
        }
        console.log(table)
        maxAns = Math.max(maxAns,table.size)
    }
    console.log(maxAns)
};
lengthOfLongestSubstring("pwwkew")