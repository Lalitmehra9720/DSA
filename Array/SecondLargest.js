// Find the second largest element in an array.
const arr = [23,3,134,111,33,123,56,43]

let max1, max2, i =0;
if(arr[i] > arr[i+1]){
    max1 = arr[i]
    max2 = arr[i+1]
}
else{
    max1 = arr[i+1]
    max2 = arr[i]
}

for(let i = 2; i < arr.length; i++){
    if(arr[i] > max1){
        max2 = max1;
        max1 = arr[i]
    }
    else if(arr[i] > max2){
        max2 = arr[i]
    }
}
console.log(`array is : ${arr}`)
console.log(`the first largest number is : ${max1}`)
console.log(`the second largest number is : ${max2}`)