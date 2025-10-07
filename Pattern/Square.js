function square(size) {
  for (let row = 1; row <= size; row++) {
    for (let col = 1; col <= size; col++) {
      if (row === 1 || row === size || col === 1 || col === size) {
        process.stdout.write("* "); // border
      } else {
        process.stdout.write("  "); // inner space (two spaces for alignment)
      }
    }
    console.log(); // move to next line after each row
  }
}

square(6);
