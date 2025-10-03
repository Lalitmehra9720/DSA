// Find the index of the first repeating element.
let arr = [34,43,12,12,23,12,45];
function FindRepeatingElement(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(i === j){
                continue;
            }else{
                if(arr[i] == arr[j]){
                    return j;
                }
            }
        }
    }return "Array has unique elements."
}
let result = FindRepeatingElement(arr);
if(typeof(result) === "number"){
    console.log(`the first repeated element is found at index ${result}`)
}else{
    console.log(result);
}