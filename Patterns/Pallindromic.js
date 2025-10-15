const Pallindromic = (num) => {
  for (let i = 1; i <= num; i++) {
    // spaces
    for (let space = num; space > i; space--) {
      process.stdout.write("  ");
    }

    // descending numbers
    for (let j = i; j >= 1; j--) {
      process.stdout.write(j + " ");
    }

    // ascending numbers
    for (let k = 2; k <= i; k++) {
      process.stdout.write(k + " ");
    }

    console.log();
  }
};

Pallindromic(5);
