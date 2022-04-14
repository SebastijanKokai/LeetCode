function countingSort(arr) {
  // Write your code here
  let countingArray = Array(100).fill(0);

  for (let i = 0; i < arr.length; i++) {
    countingArray[arr[i]]++;
  }

  return countingArray;
}

let arr = [1, 1, 3, 2, 1];

console.log(countingSort(arr));
