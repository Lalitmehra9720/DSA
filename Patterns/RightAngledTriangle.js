// *
// * *
// * * *
// * * * *
// * * * * *
RightAngledTriangle = (order) => {
    for(let i = 1; i<= order; i++){
        for(let j = 1; j <= i; j++){
            process.stdout.write("* ")
        }
        console.log()
    }
}
RightAngledTriangle(5)