// Find the sum of all even numbers in an array.
let arr = [11,23,33,323,234,13,56,34,32,22]

SumOfEvens=(arr)=>{
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0){
            sum = sum + arr[i]
        }
    }return sum
}
console.log(`the total of all even numbers in an array is ${SumOfEvens(arr)}`)