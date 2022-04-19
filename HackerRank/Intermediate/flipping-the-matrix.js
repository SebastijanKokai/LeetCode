function getMax(i, j, k, l) {}

function flippingMatrix(matrix) {
  // Write your code here
  // 2n x 2n matrix
  // n x n matrix -> n/2 -> upper left quadrant
  let n = matrix.length;
  let submatrix = [];
  for (let i = 0; i < n / 2; i++) {
    for (let j = 0; j < n / 2; j++) {
      submatrix.push(
        Math.max(
          matrix[i][j],
          matrix[i][n - 1 - j],
          matrix[n - 1 - i][j],
          matrix[n - 1 - i][n - 1 - j]
        )
      );
    }
  }

  let sum = 0;

  for (let i = 0; i < submatrix.length; i++) {
    sum += submatrix[i];
  }

  return sum;
}

// let matrix = [
//   [1, 2],
//   [3, 4],
// ];

let matrix = [
  [112, 42, 83, 119],
  [56, 125, 56, 49],
  [15, 78, 101, 43],
  [62, 98, 114, 108],
];

// console.log(Math.max(55, 1, 2, 3));

console.log(flippingMatrix(matrix));
