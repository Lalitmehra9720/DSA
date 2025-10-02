const arr = [23,4,65,32,6,12];
function FindLargestElement(arr){
    
    let max = 0; 
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
let largest = FindLargestElement(arr);
console.log("greatest element in array "+arr+" is "+ largest);