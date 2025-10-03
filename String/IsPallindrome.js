// Check if a string is a palindrome.
let str = "amma";
IsPallindrome=(str)=>{
    let mid = Math.floor(str.length/2)
    let last = str.length-1
    for(let i = 0; i <= mid; i++){
        if(str[i] == str[last]){
            last--
            continue
        }
        else return "Not pallindrome"
    }
    return "pallindrome"
}
// let result = IsPallindrome(str)
console.log(IsPallindrome(str))
// console.log(`the string is ${result}`)