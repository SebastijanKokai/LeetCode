const arr = [9998887773, 2223336659, 1254789658, 2364587965, 7895214658];
// First code
// let maxNumber = Math.max(...arr);
// let minNumber = Math.min(...arr);

// let max = 0;
// let min = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === maxNumber) {
//     max += maxNumber;
//   } else if (arr[i] === minNumber) {
//     min += minNumber;
//   } else {
//     max += arr[i];
//     min += arr[i];
//   }
// }

// process.stdout.write(`${min} ${max}`);

// Second code
arr.sort();

let max = arr[4];
let min = arr[0];
let otherNumbers = 0;

for (let i = 1; i < arr.length - 1; i++) {
  otherNumbers += arr[i];
}

max += otherNumbers;
min += otherNumbers;

process.stdout.write(`${min} ${max}`);
