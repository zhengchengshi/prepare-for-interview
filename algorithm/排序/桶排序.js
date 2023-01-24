// 一个坑一个萝卜，也可以一个坑多个萝卜，对每个坑排序，再拿出来，整体就有序。
// 计数排序就是一个萝卜一个坑，而桶排序就是一个坑多个萝卜
// 桶排适用于入参可以均匀的分配到每一个桶中的情况。
// 算法本质是将元素根据区间分配到每个桶中，再对桶内元素单独排序后形成有序数组
function bucketSort(arr, bucketSize) {
  if (arr.length === 0) {
    return arr;
  }
  var i;
  var minValue = arr[0];
  var maxValue = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i]; // 输入数据的最小值
    } else if (arr[i] > maxValue) {
      maxValue = arr[i]; // 输入数据的最大值
    }
  }

  //桶的初始化
  var DEFAULT_BUCKET_SIZE = 5; // 设置桶默认的区间为5
  bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;
  var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  var buckets = new Array(bucketCount);
  //建立桶群
  for (i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }

  //根据数值判断该元素所处区间,将数据分配到各个桶中
  for (i = 0; i < arr.length; i++) {
    buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
  }

  arr.length = 0; // 清空arr
  for (i = 0; i < buckets.length; i++) {
    buckets[i].sort((a, b) => a - b); // 对每个桶进行排序
    // 排好序的桶就可以把元素插入到结果数组中了
    for (var j = 0; j < buckets[i].length; j++) {
      arr.push(buckets[i][j]);
    }
  }

  return arr;
}
