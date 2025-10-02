// Find the sum of all elements in an array.
const arr = [64,85,15,112,112,123,13,1,13,10]

function SumOfElements(array){
    let sum = 0;
    for(let i=0; i < arr.length; i++){
        sum = sum + array[i];
    }
    return sum;
}

let FinalResult = SumOfElements(arr)
console.log("this is the array : "+arr);
console.log("the sum of all these elements is : "+ FinalResult)