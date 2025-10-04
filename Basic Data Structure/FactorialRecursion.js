//find the factorial of a number using recursion

// let num = parseInt(prompt("Enter a number: "));

FindFactorial =(n) =>{
    if(n === 0 || n === 1){
        return 1
    }
    return n * FindFactorial(n-1)
}
let result = FindFactorial(5);
// let result = FindFactorial(num)
// console.log(`factorial of ${num} is : ${result})
console.log(`factorial of 5 is : ${result}`)