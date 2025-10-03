//program for checking the array is sorted or not ?

let arr = [12,22,45,34,56];
function CheckSorted(arr){
    for(let i = 0; i < arr.length-1; i++){
        if(arr[i] > arr[i+1]){
            return [false,i+1];
        }
    }
    return [true];
}
let [ans,itr ]= CheckSorted(arr);
if(ans === true){
    console.log(`the array is sorted is : ${ans}`);
}else{
    console.log(arr);
    console.log(`the array is sorted is : ${ans}  and the unsorted element is found at index ${itr}`);
}
