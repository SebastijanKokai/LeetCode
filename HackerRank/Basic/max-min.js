/******** THIRD TRY - using QUICKSORT instead of built-in JS sort ********/
function partition(arr, start, end) {
  // Taking the last element as the pivot
  const pivotValue = arr[end];
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      // Swapping elements
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      // Moving to next element
      pivotIndex++;
    }
  }

  // Putting the pivot value in the middle
  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  return pivotIndex;
}

function quickSortIterative(arr) {
  // Creating an array that we'll use as a stack, using the push() and pop() functions
  stack = [];

  // Adding the entire initial array as an "unsorted subarray"
  stack.push(0);
  stack.push(arr.length - 1);

  // There isn't an explicit peek() function
  // The loop repeats as long as we have unsorted subarrays
  while (stack[stack.length - 1] >= 0) {
    // Extracting the top unsorted subarray
    end = stack.pop();
    start = stack.pop();

    pivotIndex = partition(arr, start, end);

    // If there are unsorted elements to the "left" of the pivot,
    // we add that subarray to the stack so we can sort it later
    if (pivotIndex - 1 > start) {
      stack.push(start);
      stack.push(pivotIndex - 1);
    }

    // If there are unsorted elements to the "right" of the pivot,
    // we add that subarray to the stack so we can sort it later
    if (pivotIndex + 1 < end) {
      stack.push(pivotIndex + 1);
      stack.push(end);
    }
  }
}

function maxMin(k, arr) {
  // Write your code here
  quickSortIterative(arr);
  let minOverall = Infinity;

  for (let i = 0; i <= arr.length - k; i++) {
    let min = arr[i + k - 1] - arr[i];
    if (minOverall > min) {
      minOverall = min;
    }
  }
  return minOverall;
}

/******** SECOND TRY ********/
// function maxMin(k, arr) {
//   // Write your code here
//   arr.sort((a, b) => a - b);
//   let minOverall = Infinity;

//   for (let i = 0; i <= arr.length - k; i++) {
//     const arr2 = arr.slice(i, i + k);

//     let min = arr2[arr2.length - 1] - arr2[0];
//     if (minOverall > min) {
//       minOverall = min;
//     }
//   }
//   return minOverall;
// }

/******** FIRST TRY ********/

// function maxMin(k, arr) {
//   // Write your code here
//   arr.sort((a, b) => a - b);
//   let minOverall = Infinity;

//   for (let i = 0; i <= arr.length - k; i++) {
//     const arr2 = arr.slice(i, i + k);
//     let min = Math.min(Math.max(...arr2) - Math.min(...arr2));
//     if (minOverall > min) {
//       minOverall = min;
//     }
//   }
//   return minOverall;
// }

/******** TESTING BASE CASES ********/
// const arr = [1, 4, 7, 2];
// const k = 2;

const arr = [1, 2, 3, 4, 10, 20, 30, 40, 100, 200];
const k = 4;

console.log(maxMin(k, arr));
