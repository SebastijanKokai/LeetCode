function hourglassSum(arr) {
  // Write your code here
  // 4 rows - ignore last two
  // 4 columns - ignore first and last
  let maxSum = -Infinity;
  for (let i = 0; i < 4; i++) {
    for (let k = 0, j = 1; k < 4; k++, j++) {
      let sum =
        arr[i][k] +
        arr[i][k + 1] +
        arr[i][k + 2] +
        arr[i + 1][j] +
        arr[i + 2][k] +
        arr[i + 2][k + 1] +
        arr[i + 2][k + 2];
      if (maxSum < sum) {
        maxSum = sum;
      }
    }
  }
  return maxSum;
}
let arr = [];
console.log(hourglassSum(arr));
