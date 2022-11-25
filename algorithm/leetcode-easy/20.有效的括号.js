/*给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。

示例 1：
输入：s = "()"
输出：true

示例 2：
输入：s = "()[]{}"
输出：true

示例 3：
输入：s = "(]"
输出：false

示例 4：
输入：s = "([)]"
输出：false

示例 5：
输入：s = "{[]}"
输出：true*/

var isValid = function(s) {
    const map = new Map([
        // ['(',1],
        // [')',1],
        // ['[',2],
        // [']',2],
        // ['{',3],
        // ['}',3],
        ['(',')'],
        ['[',']'],
        ['{','}'],
    ])
    const strArr = Array.from(s);
    let emptyArr = []
    // emptyArr.push(strArr[0])
    // emptyArr.push()

    // console.log(strArr.length)
    for(let i = 0;i<strArr.length;i++){
        console.log(emptyArr)
        emptyArr.push(strArr[i])
        if(map.get(emptyArr[emptyArr.length-2])===emptyArr[emptyArr.length-1]){
            console.log(emptyArr[emptyArr.length-2],emptyArr[emptyArr.length-1])
            emptyArr.splice(emptyArr.length-2,2)
        }
        // if(map.get(emptyArr[emptyArr.length-2])===map.get(emptyArr[emptyArr.length-1])&&emptyArr[emptyArr.length-2]!==emptyArr[emptyArr.length-1]){
        //     if(emptyArr[emptyArr.length-2]!==')'&&emptyArr[emptyArr.length-2]!==']'&&emptyArr[emptyArr.length-2]!=='}'){
        //         console.log(emptyArr[emptyArr.length-2],emptyArr[emptyArr.length-1])
        //         emptyArr.splice(emptyArr.length-2,2)
        //     }
        // }
        // if(map.get(strArr[i])!==map.get(strArr[i+1])){

        //     // console.log(false)
        //     // emptyArr.push(strArr[i+2])
        // }
        // if(map.get(emptyArr[i])===map.get(emptyArr[i+1])){
        //     // console.log(true)
        //     emptyArr.pop()
        //     // emptyArr.splice(emptyArr.length-1,2,strArr[i+2])
        //     // emptyArr.pop()

        //     // emptyArr.push(strArr[i])
        // }
        // console.log(map.get(strArr[i]))
        // if(map.get(strArr[i])===map.get(strArr[strArr.length-1-i])){
        //     console.log(true)
        //     if(i===strArr.length-1){
        //         return true;
        //     }
        // }
        // else{
        //     console.log(false)
        //     return false;
        // }

    }
    // for(let i = 0;i<emptyArr.length;i++){
    //     if(map.get(emptyArr[i])===map.get(emptyArr[i+1])){
    //         // console.log(true)
    //         emptyArr.pop()
    //         // emptyArr.splice(emptyArr.length-1,2,strArr[i+2])
    //         // emptyArr.pop()

    //         // emptyArr.push(strArr[i])
    //     }
    // }
    console.log(emptyArr)
    return emptyArr.length>0?false:true
    // if(emptyArr.length===0){
    //     console.log(true)
    //     return true
    // }
    // else{
    //     console.log(false)
    //     return false
    // }
    // console.log(emptyArr)
};
isValid("()[]}{")
// 栈的问题，先入后出
// 哈希map不仅仅可以映射数字，有映射关系的都可以