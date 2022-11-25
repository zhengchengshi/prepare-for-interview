// 归并排序，分而治之的思想，将数组一分为二，分别递归左右数组，逐渐将数组细化到不可再分，每次返回细化后的排序结果（这是理解归并的关键）
// 为什么要逐一细分数组，每次返回排序数组呢，是因为排序后的数组便于左右两边进行比较，从而能更好的插入到临时数组中
// 比如 left = [1,2] right = [3,4] 我们便可以通过比较两数组的首部决定把谁推到进时数组， right = [2,1] left = [3,4] 此时我们直接推入结果就会出错
// 归并排序的核心是分而再和
// 快排和归并的区别在于归并是将数组置于最细化，逐步实现局部有序，最后整体有序
function merge(arr=[]){
    if(arr.length<2) return arr;
    const left = arr.slice(0,Math.floor(arr.length/2));
    const right = arr.slice(Math.floor(arr.length/2));
    return mergeSort(merge(left),merge(right));
}
function mergeSort(left=[],right=[]){
    let res = [];
    while(left.length>0&&right.length>0){
        if(left[0]>right[0]){
            res.push(right.shift())
        }
        else{
            res.push(left.shift())
        }
    }
    if(left.length===0){
        res = res.concat(right);
    }
    else if(right.length===0){
        res = res.concat(left);
    }
    return res;
}
const arr = [1,2,1,3,8,5,2]
const res = merge(arr);
console.log (res);