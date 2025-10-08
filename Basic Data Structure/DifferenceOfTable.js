 difference=(n1,n2) =>{

        // Write your code here
        let  first = 0, second = 0; 
        for(let  i = 1; i <= 10; i++){
            first = n1*i;
            second = n2*i;
            let  ans = first - second; 
            process.stdout.write(ans+" ");
            //here i use this method process.stdout.write()  to print the difference in a single line 
        }
    }
difference(10,5);