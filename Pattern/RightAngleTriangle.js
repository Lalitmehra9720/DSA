// User function Template for Java
function triangle(s){

        // Write your code here
        for(let i = 1; i <= s; i++){
            for(let j = 1; j <= i; j++){
                if(i == j || i == s || j == 1){
                    process.stdout.write("* ");
                }else{
                    process.stdout.write("  ");
                }
            }console.log("");
        }
    }
triangle(5);

