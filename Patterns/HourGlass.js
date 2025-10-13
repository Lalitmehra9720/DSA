// // *******
// //  *****
// //   ***
// //    *
// //   ***
// //  *****
// // *******

HourGlass = (order) => {
    // upper part
    for (let i = 0; i < order; i++) {
        
        for (let space = 0; space < i; space++) {//printing spaces 
            process.stdout.write(" ");
        }
        // print stars
        for (let j = 0; j < 2 * (order - i) - 1; j++) {//printing pattern
            process.stdout.write("*");
        }
        console.log();
    }

    // lower part
    for (let i = 1; i < order; i++) {
        // print spaces
        for (let space = 0; space < order - i - 1; space++) {//printing spaces
            process.stdout.write(" ");
        }
        // print stars
        for (let j = 0; j < 2 * i + 1; j++) {//printing lower pattern
            process.stdout.write("*");
        }
        console.log();
    }
}

HourGlass(5);
