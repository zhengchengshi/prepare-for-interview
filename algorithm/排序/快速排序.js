/*
快速排序每一次都排定一个元素（**这个元素呆在了它最终应该呆的位置**），然后递归地去排它左边的部分和右边的部分，依次进行下去，直到数组有序；
算法思想：分而治之（分治思想），与「归并排序」不同，「快速排序」在「分」这件事情上不想「归并排序」无脑地一分为二，而是
采用了 partition 的方法（书上，和网上都有介绍，就不展开了），因此就没有「合」的过程。
*/
// 简易快排，每次都以中间元素作为切分元素
// 但是优化后的快排应该是以确定位置的索引作为切分元素（使用partition函数确定位置，同时返回确定位置的切分元素索引）
// partition函数的核心是通过遍历交换切分元素与当前遍历元素的位置，从而达成确定切分元素位置
function quicksort([...arr]) {
  if (arr.length < 2) return arr;
  const left = [];
  const right = [];
  const pivotIndex = Math.floor(arr.length / 2);
  // 取中间元素作为基准，将其移出数组中，排序完毕后将左右数组和基准进行拼接
  // pivot也是完全确定的在遍历过后
  // splice会返回一个数组
  const pivot = arr.splice(pivotIndex, 1)[0];
  console.log(pivot);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  // 数组加法会先将数组转为字符串
  return quicksort(left).concat([pivot], quicksort(right));
}
const arr = [5, 2, 3, 1];
const res = quicksort(arr);
console.log(res);

function greatQuicksort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = partition(arr, left, right);
    greatQuicksort(arr, left, pivotIndex - 1);
    greatQuicksort(arr, pivotIndex + 1, right);
  }
  return arr;
}

// function partition(arr,left,right){
//     let pivot = left;
//     for(let i = left;i<right;i++){
//         if(arr[i]<arr[pivot]){
//             swap(arr,pivot,i);
//             pivot ++;
//         }
//     }
//     console.log (arr);
//     return pivot
// }
function partition(arr, left, right) {
  // 分区操作
  var pivot = left, // 设定基准值（pivot）不自己和自己比
    index = pivot + 1; // index用于保障比较时pivot不变的情况下进行位置交换。
  for (var i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index);
      index++;
    }
  }
  swap(arr, pivot, index - 1); //将切分元素与确定位置的元素交换
  return index - 1;
}

function swap(arr, l, r) {
  const temp = arr[l];
  arr[l] = arr[r];
  arr[r] = temp;
}
const res2 = greatQuicksort(arr);
console.log(res2);

function repeatQuickSort([...arr]) {
  if (arr.length < 2) return arr;
  const left = [];
  const right = [];
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr.splice(pivotIndex, 1)[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...repeatQuickSort(left), pivot, ...repeatQuickSort(right)];
}
console.log(repeatQuickSort(arr));
