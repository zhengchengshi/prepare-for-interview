/*
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 
示例 1：

输入：digits = "23"
输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
示例 2：

输入：digits = ""
输出：[]
示例 3：

输入：digits = "2"
输出：["a","b","c"]

*/
var letterCombinations = function(digits) {
    const table = new Map([
        [2,['a','b','c']],
        [3,['d','e','f']],
        [4,['g','h','i']],
        [5,['j','k','l']],
        [6,['m','n','o']],
        [7,['p','q','r','s']],
        [8,['t','u','v']],
        [9,['w','x','y','z']],
    ])
    const strArr = digits.split("");
    let flag = digits.length - 1;
    let resARR = [];
    let preArr = [];
    let currentArr = [];
    
    while(flag>=0){
        currentArr = table.get(parseInt(strArr[flag]));
        if(digits.length===1){
            return currentArr
        }
        // 自由组合数组元素
        let left = 0;
        let right = 0;
        let temporaryArr = []
        while(left<preArr.length){
            if(right === currentArr.length){
                left++;
                // 回溯
                right = 0;
            }
            if(left === preArr.length){
                break;
            }
            if(flag === 0){
                resARR.push(currentArr[right]+preArr[left])
            }
            else{
                temporaryArr.push(currentArr[right]+preArr[left])
            }
            right++;
        }
        // 更新preArr
        if(preArr.length===0){
            left = 0;
            preArr = table.get(parseInt(strArr[flag]))
        }
        else{
            preArr = temporaryArr
        }
        flag--;
    }
    console.log(resARR)
    return resARR;
};
letterCombinations("234")