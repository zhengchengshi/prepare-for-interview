// 两轮循环，前后元素比较
function bubbleSort([...arr]){
    for(let i = 0;i<arr.length;i++){
        for(let j = 0;j<arr.length;j++){
            if(arr[j+1]<arr[j]){
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
const arr = [5,2,3,1,5,2,5,3,8];
console.log (bubbleSort(arr));