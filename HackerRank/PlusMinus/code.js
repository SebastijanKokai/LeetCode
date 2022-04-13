"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  // Write your code here
  let positiveNumbers = 0;
  let negativeNumbers = 0;
  let zeros = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveNumbers++;
    } else if (arr[i] < 0) {
      negativeNumbers++;
    } else {
      zeros++;
    }
  }

  process.stdout.write(
    parseFloat(positiveNumbers / arr.length)
      .toFixed(6)
      .toString()
  );
  process.stdout.write("\n");
  process.stdout.write(
    parseFloat(negativeNumbers / arr.length)
      .toFixed(6)
      .toString()
  );
  process.stdout.write("\n");
  process.stdout.write(
    parseFloat(zeros / arr.length)
      .toFixed(6)
      .toString()
  );
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  plusMinus(arr);
}
