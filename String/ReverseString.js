// Reverse a string without using extra space.
let str = "this is my string"

ReverseString = (message)=>{
    let reversed = message.split("")
    let left = 0 
    let last = reversed.length-1
    let temp
    while(left < last){
        temp = reversed[left]
        reversed[left] = reversed[last]
        reversed[last] = temp

        left++
        last--
    }
    return reversed.join("")
}
let result = ReverseString(str);
console.log(result)
