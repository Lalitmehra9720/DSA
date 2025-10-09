const prompt = require("prompt-sync")();

function searching( myArr,target){
    for(let i = 0; i<myArr.length; i++){
        if(target == myArr[i]){
            return i;
        }
    }
    return -1;
}

let arr = [22,35,23,67,32,90,98,11];
    
    let search = prompt("enter target: ")
    console.log("Searching...............\n\n");
    let result = searching(arr,search);
    if (result != -1){
        console.log(search+" is found at "+result+" index")
    }
    else{
        console.log("Searching unsuccessful")
    }
