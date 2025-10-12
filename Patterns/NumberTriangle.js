// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
NumberPattern = (order) =>{
    for(let i = 1; i <= order; i++){
        for(let j = 1; j <= i; j++){
            process.stdout.write(`${j} `)
        }
        console.log()
    }
}
NumberPattern(5);