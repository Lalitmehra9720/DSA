// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

SameNumber = (order) =>{
    for(let i = 1; i <= order; i++){
        for(let j = 1; j <= i; j++){
            process.stdout.write(`${i} `)
        }
        console.log()
    }
}
SameNumber(5)