
CheckPrime=(num)=>{
    if(num == 1) console.log("False");
    for(let i = 2; i < num; i++){
        if(num % i == 0){
            console.log("False");
            return;
        }
    }
    console.log("True");
}
CheckPrime(23);