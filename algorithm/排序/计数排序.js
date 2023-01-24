// 计数排序 桶排序 可以在不进行比较的前提下排序
const arr = [1, 2, 1, 3, 8];
function countingSort(arr, maxValue) {
  // 如入参没有maxValue，需要根据题目所给的参数最大范围确定范围(offset)后创建数组
  // 用bucket来记录每个元素的出现次数
  // 注意bucket中的元素代表出现次数，索引代表真值
  const bucket = Array(maxValue + 1).fill(0);
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    bucket[arr[i]]++;
  }
  for (let j = 0; j < maxValue + 1; j++) {
    while (bucket[j] > 0) {
      bucket[j]--;
      res.push(j);
    }
  }
  console.log(res);
}
countingSort(arr, 8);
