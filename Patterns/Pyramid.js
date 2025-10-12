//     *
//    * *
//   * * *
//  * * * *
// * * * * *

Pyramid = (order) =>{
    for(let i = 1; i <= order; i++){
        for(let space = 1; space <= order-i; space++){
            process.stdout.write(" ")
        }
        for(let j = 1; j <= i; j++){
            process.stdout.write("* ")
        }
        console.log()
    }
    
}
Pyramid(7)