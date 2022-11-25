/*

数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
示例 1：

输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]
示例 2：

输入：n = 1
输出：["()"]

*/
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // 巧解，封闭括号无论如何插入封闭括号中都是封闭括号集合
    // 封闭括号填充后去重
    // let resSet = new Set(['()']);
    // if(n === 1){
    //     return [...resSet];
    // }
    // for(let i = 1;i<n;i++){
    //     let temporarySet = new Set();
    //     for(const s of resSet){
    //         for(let j = 0;j<s.length;j++){
    //             console.log (s);
    //             // 插入字符串可以不用将字符串拆为数组再转
    //             temporarySet.add(s.slice(0, j) + '()' + s.slice(j));
    //         }
    //     }
    //     resSet = temporarySet;
    // }
    // return [...resSet];
    
    // 通解：回溯 剪枝 求出符合条件的组合
    let left = right = n;
    const res = [];
    const dfs = (left,right,path)=>{
        // *键条件， 如果左括号在递归时比右括号多，则本次递归必然无法成功匹配
        if(left>right){
            return;
        }
        // 条件符合，推入结果数组
        if(left===0&&right===0){
            res.push(path.join(''));
            return;
        }
        // 因为是二叉树 所以无需进行for循环横向遍历
        if(left>0){
            path.push('(');
            dfs(left-1,right,path);
            path.pop();
        }
        if(right>0){
            path.push(')');
            dfs(left,right-1,path);
            path.pop();
        }
    }
    dfs(left,right,[])
    console.log (res);
};
generateParenthesis(2)
