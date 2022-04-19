function sockMerchant(n, ar) {
  // Write your code here

  // First method - JS sort
  //   ar.sort((a, b) => a - b);
  //   let counter = 0;
  //   for (let i = 0; i < n - 1; ) {
  //     if (ar[i] == ar[i + 1]) {
  //       counter++;
  //       i += 2;
  //     } else {
  //       i++;
  //     }
  //   }

  //   return counter;

  // Second method - counting sort

  let countingArray = Array(101).fill(0);
  let counter = 0;

  for (let i = 0; i < n; i++) {
    countingArray[ar[i]]++;
  }

  for (let i = 0; i < countingArray.length; i++) {
    counter += parseInt(countingArray[i] / 2);
  }
  return counter;
}

// let n = 9;
// let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
// let n = 20;
// let ar = [4, 5, 5, 5, 6, 6, 4, 1, 4, 4, 3, 6, 6, 3, 6, 1, 4, 5, 5, 5];
let n = 100;
let ar = [
  44, 55, 11, 15, 4, 72, 26, 91, 80, 14, 43, 78, 70, 75, 36, 83, 78, 91, 17, 17,
  54, 65, 60, 21, 58, 98, 87, 45, 75, 97, 81, 18, 51, 43, 84, 54, 66, 10, 44,
  45, 23, 38, 22, 44, 65, 9, 78, 42, 100, 94, 58, 5, 11, 69, 26, 20, 19, 64, 64,
  93, 60, 96, 10, 10, 39, 94, 15, 4, 3, 10, 1, 77, 48, 74, 20, 12, 83, 97, 5,
  82, 43, 15, 86, 5, 35, 63, 24, 53, 27, 87, 45, 38, 34, 7, 48, 24, 100, 14, 80,
  54,
];

console.log(sockMerchant(n, ar));
