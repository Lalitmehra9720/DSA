//find the missing number in a sequence from 1 to n.
 let  arr = [1, 2, 3, 5];
 FindMissingNumber = (arr)=>{
    let total, sum = 0;
    let n = arr.length + 1;
    total = n * (n+1)/2;
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return total - sum;

 } 
 let missing = FindMissingNumber(arr);
 
 console.log("the missing number is : "+missing);