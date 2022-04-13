let strings = ["ab", "ab", "abc", "abc", "saadssad"];
let queries = ["ab", "abc", "bc", "kccc", "ddd", "saadssad"];

let n = queries.length;
let result = Array(n).fill(0);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < strings.length; j++) {
    if (queries[i] == strings[j]) {
      result[i]++;
    }
  }
}
console.log(result);

// for (let i = 0; i < n; i++) {
//   let idx = strings.indexOf(queries[i]);

//   while (idx !== -1) {
//     result[idx]++;
//     strings[idx] = 0;
//     idx = strings.indexOf(queries[i]);
//   }
// }

// console.log(result);

// for (let i = strings.length - 1; i >= 0; i--) {
//   let idx = queries.indexOf(strings[i]);
//   if (idx !== -1) {
//     result[idx]++;
//   }
// }

// console.log(result);
