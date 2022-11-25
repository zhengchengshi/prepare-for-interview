/*
将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。

比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

P   A   H   N
A P L S I I G
Y   I   R
之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。

请你实现这个将字符串进行指定行数变换的函数：

示例 1：

输入：s = "PAYPALISHIRING", numRows = 3
输出："PAHNAPLSIIGYIR"
示例 2：
输入：s = "PAYPALISHIRING", numRows = 4
输出："PINALSIGYAHRPI"
解释：
P     I    N
A   L S  I G
Y A   H R
P     I
示例 3：

输入：s = "A", numRows = 1
输出："A"
*/
var convert = function(s, numRows) {
    // 使用标记 实则也为二位矩阵思路
    // 实操
    if(numRows===1){
        return s
    }
    const strArr = s.split('');
    const seqArr = []
    const table = new Map();
    let num = 1;
    let flag = 'up';
    for(let i = 0;i<strArr.length;i++){
        // 动态插入属性
        const insertObj = {}
        insertObj[num] = strArr[i]
        seqArr.push(insertObj)
        if(flag==='up'){
            num++;
        }
        else{
            num--;
        }

        if(num>=numRows){
            flag = 'down'
        }
        if(num<=1){
            flag = 'up'
        }
    }
    // console.log(seqArr)
    const res = []
    
    for(let j = 1;j<=numRows;j++){
        for(let i = 0;i<seqArr.length;i++){
            if(seqArr[i][j]){
                res.push(seqArr[i][j])
            }
        }
    }
    console.log(res)
    // leetcode解答
    
    // 法一:二维数组
    var convert = function(s, numRows) {
        const n = s.length, r = numRows;
        if (r === 1 || r >= n) {
            return s;
        }
        const t = r * 2 - 2;
        const c = Math.floor((n + t - 1) / t) * (r - 1);
        const mat = new Array(r).fill(0).map(() => new Array(c).fill(0));
        for (let i = 0, x = 0, y = 0; i < n; ++i) {
            mat[x][y] = s[i];
            if (i % t < r - 1) {
                ++x; // 向下移动
            } else {
                --x;
                ++y; // 向右上移动
            }
        }
        const ans = [];
        for (const row of mat) {
            for (const ch of row) {
                if (ch !== 0) {
                    ans.push(ch);
                }
            }
        }
        return ans.join('');
    };
    
    // 法二:压缩矩阵空间
    var convert = function(s, numRows) {
        const n = s.length, r = numRows;
        if (r === 1 || r >= n) {
            return s;
        }
        const mat = new Array(r).fill(0);
        for (let i = 0; i < r; ++i) {
            mat[i] = [];
        }
        for (let i = 0, x = 0, t = r * 2 - 2; i < n; ++i) {
            mat[x].push(s[i]);
            if (i % t < r - 1) {
                ++x;
            } else {
                --x;
            }
        }
        const ans = [];
        for (const row of mat) {
            ans.push(row.join(''));
        }
        return ans.join('');
    };
    
    // 发三:直接构造
    var convert = function(s, numRows) {
        const n = s.length, r = numRows;
        if (r === 1 || r >= n) {
            return s;
        }
        const t = r * 2 - 2;
        const ans = [];
        for (let i = 0; i < r; i++) { // 枚举矩阵的行
            for (let j = 0; j < n - i; j += t) { // 枚举每个周期的起始下标
                ans.push(s[j + i]); // 当前周期的第一个字符
                if (0 < i && i < r - 1 && j + t - i < n) {
                    ans.push(s[j + t - i]); // 当前周期的第二个字符
                }
            }
        }
        return ans.join('');
    };
    
};
convert('ABC', 1)