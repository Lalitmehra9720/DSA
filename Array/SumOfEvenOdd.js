// Find the sum of all even numbers in an array.
// Find the sum of all odd numbers in an array.
let arr = [11,23,33,323,234,13,56,34,32,22]


SumOfEvens=(arr)=>{
    let sumEven = 0
    let sumOdd = 0
    for(let i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0){
            sumEven = sumEven + arr[i]
        }
        else{
            sumOdd = sumOdd + arr[i]
        }
    }return [sumEven, sumOdd]
}
// console.log(`the total of all even and odd numbers in an array are ${SumOfEvens(arr)}`)
let [even , odd] = SumOfEvens(arr)
console.log(`the total of all even numbers in an array is : ${even}`)
console.log(`the total of all odd numbers in an array is : ${odd}`)
