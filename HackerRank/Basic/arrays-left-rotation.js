function rotLeft(a, d) {
  // Write your code here
  for (let i = d; i > 0; i--) {
    let c = a.shift();
    a.push(c);
  }
  return a;
}

let n = 5;
let d = 4;
let a = [1, 2, 3, 4, 5];

rotLeft(a, d);
