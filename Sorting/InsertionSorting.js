// Insertion Sorting
let arr = [4, 12, 11, 54, 2, 1];

function InsertionSorting(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }

  return arr;
}

console.log(InsertionSorting(arr));
