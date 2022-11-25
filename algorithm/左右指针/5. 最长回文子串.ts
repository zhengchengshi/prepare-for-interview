/**
 * 给你一个字符串 s，找到 s 中最长的回文子串。

 

示例 1：

输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
示例 2：

输入：s = "cbbd"
输出："bb"
 

提示：

1 <= s.length <= 1000
s 仅由数字和英文字母组成
 */
function getPalindrome(s: string, left: number, right: number): string {
  while (left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
    left--;
    right++;
  }
  return s.substring(left + 1, right); // left 取得到，right取之前的
}
function longestPalindrome(s: string): string {
  // 超时
  // let res = "";
  // for(let i = 0;i<=s.length-1;i++){
  //     for(let j = i+1;j<=s.length;j++){
  //         const sliceStr = s.slice(i,j)
  //         const reverseStr = sliceStr.split("").reverse().join("");
  //         if(sliceStr === reverseStr){
  //             res = j-i>res.length?sliceStr:res;
  //         }
  //     }
  // }
  // return res;
  let res = "";
  for (let i = 0; i < s.length; i++) {
    // 奇偶逻辑并不用分开处理，可以使用同一逻辑来判断回文，但是要传入i和i+1
    const str1 = getPalindrome(s, i, i);
    const str2 = getPalindrome(s, i, i + 1);
    res = str1.length > res.length ? str1 : res;
    res = str2.length > res.length ? str2 : res;
  }
  return res;
}
