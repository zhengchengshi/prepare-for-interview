/*
输入一个字符串，打印出该字符串中字符的所有排列。

你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

示例:

输入：s = "abc"
输出：["abc","acb","bac","bca","cab","cba"]

*/
/**
 * @param {string} s
 * @return {string[]}
 */

// 逻辑同全排列2
// 可能存在重复的字母，需要剪枝
// 不同点在于需要对字符串进行排序
var permutation = function(s) {
    const len = s.length;
    const res = [];
    // 为什么需要对字符串排序呢?
    /**
     * 本质上，相当于给重复字符定义了一个序。
        如{ a, b, b, b, c }，每次只用剩余字符集合中找到的第一个b。
        相当于定义为{ a, b1, b2, b3, c }，保证最后得到的序列中 b 按序排列就可以避免重复。 如{ b, c, b, b, a } 只要{ b1, c, b2, b3, a }这一种，而不要 { b2, c, b3, b1, a }等，就不会重复。
     */
    const temporaryArr = Array.from(s).sort();
    s = temporaryArr.join("")
    if(len === 0){ 
        return res;
    }
    const used = Array(len).fill(false);
    const dfs = (depth,used,path) =>{
        if(depth === len){
            res.push([...path].join(""));
            return;
        }
        for(let i = 0;i<len;i++){
            if (i > 0 && s[i] === s[i - 1] && !used[i - 1]||used[i]) {
                continue;
            }
            if(!used[i]){
                used[i] = true;
                path.push(s[i]);
                // console.log (path);
                dfs(depth+1,used,path);
                used[i] = false;
                path.pop();
            }
        }
    }
    dfs(0,used,[]);
    console.log(res);
    return res;
};
permutation("abc")