//     *
//    * *
//   * * *
//  * * * *
// * * * * *
//  * * * *
//   * * *
//    * *
//     *
Diamond = (order) =>{
    for(let i = 1; i <= order; i++){
        for(let space = order; space > i; space--){
            process.stdout.write(" ")
        }
        for(let star = 1; star <= i; star++){
            process.stdout.write("* ")
        }
        console.log()
    }
    
    for(let i = 1; i < order; i++){
        for(let space = 1; space<=i; space++){
            process.stdout.write(" ")
        }
        for(let j = order-1; j >= i; j--){
            process.stdout.write("* ")
        }console.log()
    }
}
Diamond(3)