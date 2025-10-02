const arr = [1,23,4,32,435,34,23,14,9,12];

function FindSmallestElement(array){
    let Small = array[0];
    for(let i = 0; i < arr.length; i++){
        if(array[i] <= Small){
            Small = array[i];
        }
    }
    return Small;
}

let Small = FindSmallestElement(arr);
console.log("the smallest element in "+arr+ " is "+Small);