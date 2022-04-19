function twoArrays(k, A, B) {
  // Write your code here
  A = A.sort((a, b) => b - a);
  B = B.sort((a, b) => a - b);

  for (let i = 0; i < A.length; i++) {
    if (A[i] + B[i] < k) {
      return "NO";
    }
  }
  return "YES";
}

// let k = 10;
// let A = [2, 1, 3];
// let B = [7, 8, 9];

// let k = 5;
// let A = [1, 2, 2, 1];
// let B = [3, 3, 3, 4];

let k = 5;
let A = [1, 2, 2, 1];
let B = [3, 9, 3, 4];

console.log(twoArrays(k, A, B));
