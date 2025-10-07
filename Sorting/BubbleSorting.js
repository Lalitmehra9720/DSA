//bubble sorting in java script
let arr = [23,23,4,6,1];
function Sorting(arr){
    for(let i = 0; i<arr.length; i++){
        for(let j = 0; j < arr.length-i-1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}
Sorting(arr);