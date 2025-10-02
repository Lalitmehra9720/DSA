// count the frequency of each element in an array

const arr = [12,45,33,12,56,7,23,45,12,7];

 CountFrequency = (array)=>{
    let visited = new Set();
    
    for(let i = 0; i < array.length; i++){
        if (visited.has(array[i])) continue;
        let freq = 0;
        for(j = 0; j < array.length; j++){
            if(array[i] === array[j]){
                freq += 1;
            }
        }
        console.log(`the frequency of ${array[i]} is ${freq}`);
        visited.add(array[i]);
    }
}
CountFrequency(arr);