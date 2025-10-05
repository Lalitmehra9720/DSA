//check the number is prime or not without recursion 

// function CheckPrime(num) {
//     let count = 0
//     if(num === 1){
//         return false
//     }
//     for(let i = 2; i < num; i++){
//         if(num % i == 0 ){
//             count++
//         }
//     }
//     if(count > 0){
//         console.log(count)
//         return false
//     }
//     else return true
// }
// console.log(CheckPrime(9));

// Check if a number is prime using recursion.
function CheckPrime(num, i = 2) {
    if (num <= 1) return false;        
    if (i === num) return true;        
    if (num % i === 0) return false;   
    return CheckPrime(num, i + 1);     
}

console.log(CheckPrime(9));  
