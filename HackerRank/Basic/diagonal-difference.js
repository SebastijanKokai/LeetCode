function diagonalDifference(arr) {
  // Write your code here
  let result = 0;
  for (let i = 0, j = arr.length - 1; i < arr.length; i++, j--) {
    // arr[i][i] -> main diagonal
    // arr[i][j] -> side diagonal
    result += arr[i][i] - arr[i][j];
  }
  return Math.abs(result);
}

// let arr = Array(3)
//   .fill()
//   .map((i, idx) => Array(3).fill(idx));

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [9, 8, 9],
// ];

let arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

console.log(diagonalDifference(arr));
