/*
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1：
输入：strs = ["flower","flow","flight"]
输出："fl"

示例 2：
输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。

*/

var longestCommonPrefix = function(strs) {
    // 完全失败，不应该用前一个比后一个，应该用第一个和别的比
    // let shareArr = [];
    // let emptyArr = [];
    // if(strs.length===1){
    //     console.log(strs.join(''))
    //     return strs.join('')
    // }
    // else{
    //     // debugger;
    //     strs.reduce((pre,cur)=>{
    //         let curStrArr = Array.from(cur);
    //         let preStrArr = Array.from(pre);
            
    //         for(let i=0;i<curStrArr.length;i++){
    //             if(!curStrArr[i]){
    //                 break;
    //             }
    //             if(curStrArr[i]===preStrArr[i]){
    //                 if(shareArr.indexOf(curStrArr[i])>-1){
    //                     emptyArr.push(curStrArr[i])
    //                 }
    //                 shareArr.push(curStrArr[i])
    //             }
    //         }
    //         return cur
    //     })
    //     if(strs.length===2){
    //         console.log(shareArr.join(''))
    //         return(shareArr.join(''))
    //     }
    //     else{
    //         console.log(emptyArr.join(''))
    //         return(emptyArr.join(''))
    //     }
    // }
    // var re = '';
    // // debugger;
    // if (!strs.length) return re;
    // // 分别用第一个元素去和别的元素一个个字符比，全通过增加字符串，不通过就直接返回
    // for (var j=0;j<strs[0].length;j++){//第j位
    //     for (var i=1;i<strs.length;i++){//第i个
    //         if (strs[i][j]!=strs[0][j]) return re
    //     }
    //     re += strs[0][j];
    // }
    // console.log(re)
    // return re;
    debugger
    let resultStack = strs[0];
    for(i=1;i<strs.length;i++){
        for(j=resultStack.length-1;j>=0;j--){
            // 如果不匹配，则切掉末尾，一直到匹配为止
            // 后面的又继续和保留的数组进行匹配，不匹配
            if(!strs[i].startsWith(resultStack)){
                resultStack = resultStack.slice(0,resultStack.length-1)
            }else{
                j=-1;
            }
        }
    }
    console.log(resultStack)
    return resultStack||'';
};

longestCommonPrefix(["cir","car"])