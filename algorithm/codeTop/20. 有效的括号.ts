/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
每个右括号都有一个对应的相同类型的左括号。
 

示例 1：

输入：s = "()"
输出：true
示例 2：

输入：s = "()[]{}"
输出：true
示例 3：

输入：s = "(]"
输出：false
 

提示：

1 <= s.length <= 104
s 仅由括号 '()[]{}' 组成
 */
// 思路就是新进来的反括号要与stack的末位字符匹配
function isValid(s: string): boolean {
  const stack: string[] = [];
  const map = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      if (map.get(s[i]) !== stack.pop()) return false;
      else continue;
    }
    stack.push(s[i]);
  }
  if (stack.length) return false;
  return true;
}
