// count number of odd and even elements in an array 

let arr = [12,34,2,33,4,67]
CountOddEven=(arr)=>{
    let even = 0
    let odd = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            console.log(`${arr[i]} is even`)
            even++
        }else{
            console.log(`${arr[i]} is odd`)
            odd++
        } 
    }
    return [even, odd]
}
let [ even,odd] = CountOddEven(arr)
console.log(`number of odd elements: ${odd}`)
console.log(`number of even elements: ${even}`)