// You are given an integer array height of length n.
// There are n vertical lines drawn such that the two endpoints
// of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container,
// such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
// In this case, the max area of water (blue section) the container can contain is 49.

/**
 * @param {number[]} height
 * @return {number}
 */

// const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// const height = [1, 2, 1];
// const height = [21, 33, 41, 1, 2, 3, 4, 5, 6, 55, 61, 111, 99, 55, 41];
// const height = [9, 6, 14, 11, 2, 2, 4, 9, 3, 8];
// const height = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 10, 11, 12, 13];

/***************************** The naive solution *****************************/

// const maxArea = function (height) {
//   let maximumArea = 0;

//   for (let i = 0; i < height.length; i++) {
//     let maxElement = Math.max.apply(null, height);
//     let maxElementIndex = height.indexOf(maxElement);

//     for (let j = 0; j < height.length; j++) {
//       if (j !== maxElementIndex) {
//         let indexDifference = Math.abs(j - maxElementIndex);
//         let area = height[j] * indexDifference;
//         if (maximumArea < area) {
//           maximumArea = area;
//         }
//       }
//     }

//     height[maxElementIndex] = 0;
//   }

//   return maximumArea;
// };

/***************************** Hopefully, a more efficient solution *****************************/

const maxArea = (height) => {
  let maximumArea = 0;
  let firstIndex = 0;
  let lastIndex = height.length - 1;

  for (let i = 0; i < height.length; i++) {
    let area =
      (lastIndex - firstIndex) *
      Math.min(height[firstIndex], height[lastIndex]);
    if (maximumArea < area) {
      maximumArea = area;
    }
    if (height[firstIndex] < height[lastIndex]) {
      firstIndex++;
    } else {
      lastIndex--;
    }
  }

  return maximumArea;
};

console.log(maxArea(height));

// Runtime: 106 ms, faster than 61.78% of JavaScript online submissions
// for Container With Most Water.
// Memory Usage: 49.7 MB, less than 29.50% of JavaScript online submissions
// for Container With Most Water.
