// 通过局部有序解实现整体有序，局部有序的两数组就可通过比较首元素判断元素大小
function mergeSort([...arr]){
    if(arr.length<2) return arr;
    const left = arr.slice(0,Math.floor(arr.length/2));
    const right = arr.slice(Math.floor(arr.length/2));
    return merge(mergeSort(left),mergeSort(right))  // mergeSort将区域逐一划分，直至数组元素<2
} 
function merge(left,right){
    const res = [];
    while(left.length>0&&right.length>0){
        if(left[0]>right[0]){
            res.push(right.shift());
        }
        else{
            res.push(left.shift());
        }
    }
    if(right.length===0){
        res.push(...left);
    }
    else{
        res.push(...right);
    }
    return res
}
const arr = [5,2,3,1,5,2,5,3,8];
console.log (mergeSort(arr));
// 快排的核心是找切分元素
function quickSort([...arr]){
    if(arr.length<2) return arr;
    const left = [];
    const right = [];
    const pivotIndex = Math.floor(arr.length/2);
    const pivot = arr.splice(pivotIndex,1)[0];
    for(let i = 0;i<arr.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }
        else{
            right.push(arr[i]);
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)];
}
console.log (quickSort(arr));
