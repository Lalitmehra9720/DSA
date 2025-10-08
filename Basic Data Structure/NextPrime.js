 NextPrime = (n) =>{
         let m = n + 1;

        while (true) {
            let isPrime = true;
            for (let i = 2; i * i <= m; i++) {
                if (m % i == 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                return m;
            }
            m++;
        }
 }
console.log(NextPrime(80));
