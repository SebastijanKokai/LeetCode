function findMedian(arr) {
  // Write your code here
  // arr has odd number of elements
  arr.sort((a, b) => a - b);
  return arr[parseInt(arr.length / 2)];
}

let arr = [5, 3, 1, 2, 4];

console.log(findMedian(arr));
