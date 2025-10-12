// * * * * *
//  * * * *
//   * * *
//    * *
//     *
InvertedPyramid = (order) =>{
    let come = 0;
    for(let i = 1; i <= order; i++){
           for(let space = 1; space < i; space++){
            process.stdout.write(" ")
           }
           for(let j = 0; j <= order-i; j++){
            come++
            process.stdout.write("* ")
           }
           console.log()

    }
}
InvertedPyramid(5)