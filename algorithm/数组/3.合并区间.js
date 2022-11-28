/*
以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。

 

示例 1：

输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]
解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
示例 2：

输入：intervals = [[1,4],[4,5]]
输出：[[1,5]]
解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let flag = intervals.length - 1;
  let ansArr = [];
  let mark = true;
  while (flag > 0) {
    intervals[flag].map((item, index) => {
      if (item < intervals[flag - 1][1] && item > intervals[flag - 1][0]) {
        mark = false;
        if (index === 1) {
          ansArr.push([intervals[flag - 1][0].intervals[flag][1]]);
        } else {
          ansArr.push([intervals[flag][0].intervals[flag - 1][1]]);
        }
      }
    });
    if (mark) {
      ansArr.push(intervals[flag]);
    }
    flag--;
  }
  console.log(ansArr);
};
merge([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]);
