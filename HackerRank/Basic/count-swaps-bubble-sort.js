function countSwaps(a) {
  // Write your code here
  let n = a.length;
  let counter = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      // Swap adjacent elements if they are in decreasing order
      if (a[j] > a[j + 1]) {
        const temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
        counter++;
      }
    }
  }

  console.log(`Array is sorted in ${counter} swaps.`);
  console.log(`First Element: ${a[0]}`);
  console.log(`Last Element: ${a[n - 1]}`);
}

let a = [3, 2, 1];

countSwaps(a);
