// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *
Square=(order) =>{
    for(let i = 1; i <= order; i++){
        for(let j = 1; j <= order; j++){
            process.stdout.write("* ")
        }
        console.log();
    }
}
Square(5);