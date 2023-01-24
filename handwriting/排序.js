// 堆排
var len; // 因为声明的多个函数都需要数据长度，所以把len设置成为全局变量

function buildMaxHeap(arr) {
  // 建立大顶堆
  len = arr.length;
  for (var i = Math.floor(len / 2); i >= 0; i--) {
    heapify(arr, i);
  }
}
// 每一次的heapify都会找出当前小分支下的局部最优解，因为largest有变化，局部最优解出现变动，所以每次swap都需要重新递归下去找largest，
// 排序完成后新成新的局部最优解
// 注意终止case和边界case
function heapify(arr, i) {
  // 堆调整
  var left = 2 * i + 1,
    right = 2 * i + 2,
    largest = i;

  if (left < len && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < len && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest != i) {
    swap(arr, i, largest);
    heapify(arr, largest);
  }
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function heapSort(arr) {
  buildMaxHeap(arr); // 形成大根堆
  // 根据大根堆找出排序数组，把最大的放在末尾，直到大根堆'长度'为0，
  // 注意: 这个过程中同时要缩小长度，让已经排好序的部分不再heapify
  for (var i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i);
    len--;
    heapify(arr, 0); // 还原过程中，每次的heapify仍然会让大根堆保持原样
  }
  return arr;
}
heapSort([1, 2, 1, 3, 8, 7, 5]);
