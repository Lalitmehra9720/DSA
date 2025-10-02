// const arr = [23,3,43,5,34,22,112,645,77,11];

// let duplArr= [];
// function ReverseArray(array){
//     let len = array.length;
//     for(let i = len-1; i >= 0; i--){
//         duplArr.push(array[i]);
//     }
//     return duplArr;
// }

// duplArr = ReverseArray(arr);
// console.log("real array: "+arr);
// console.log("revertable array: "+duplArr);


//reverse the array without extra space 
const collection = [23,3,43,5,34,22,11];

function Reverse(arr){
    start = 0; 
    end = arr.length-1;
    while(start < end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp; 

        start++;
        end--;
    }
    return arr;
}
let reversedArray = Reverse(collection);
console.log(JSON.stringify(reversedArray));
console.log(reversedArray.toString());
console.log(reversedArray.join(" "));
