function birthday(s, d, m) {
  // Write your code here
  let counter = 0;
  for (let i = 0; i < s.length - m + 1; i++) {
    let sum = 0;

    for (let j = i; j < m + i; j++) {
      sum += s[j];
    }

    if (sum == d) {
      counter++;
    }
  }
  return counter;
}

// let s = [2, 2, 1, 3, 4];
// let d = 4;
// let m = 2;
let s = [1, 1, 1, 1];
let d = 4;
let m = 4;

console.log(birthday(s, d, m));
