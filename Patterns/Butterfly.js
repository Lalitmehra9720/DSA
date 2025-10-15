Butterfly = (rows) =>{
    //upper pattern 
    let order = rows/2;
    for(let i = 1; i <= order; i++){
        for(let j = 1; j<= i; j++){
            process.stdout.write("*")
        }
        for(let k = 1; k <= 2*(order-i); k++){
            process.stdout.write(" ")
        }
        for(let l = 1; l <= i; l++){
            process.stdout.write("*")
        }
        console.log()
    }

    //lower pattern 
    for(let i = order; i >= 1; i--){
        for(let j = 1; j<= i; j++){
            process.stdout.write("*")
        }
        for(let k = 1; k <= 2*(order-i); k++){
            process.stdout.write(" ")
        }
        for(let l = 1; l <= i; l++){
            process.stdout.write("*")
        }
        console.log()
    }
}
Butterfly(8)