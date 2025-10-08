// User function Template for Java

gcd=(a, b) =>{

        // code here to calculate and return gcd of a and b
        let great;
        if(a > b){
            great = a;
        }else{
            great = b;
        }
        let gcd=0;
        for(let i = 1; i <= great; i++){
            if(a % i == 0 && b % i == 0){
                gcd = i;
            }
        }
        return gcd;
}
console.log(gcd(9,45));
