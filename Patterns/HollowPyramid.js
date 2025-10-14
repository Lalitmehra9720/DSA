//     *
//    * *
//   *   *
//  * * * *
//print the hollow pyramid

HollowPyramid = (order) => {
  for (let i = 1; i <= order; i++) {
    for (let space = order; space > i; space--) {
      process.stdout.write(" ");
    }
    for (let j = 1; j <= i; j++) {
      if (j == 1 || j == i || i == order) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" "); 
      }
      if (j < i) process.stdout.write(" "); 
    }
    console.log();
  }
};

HollowPyramid(6);
