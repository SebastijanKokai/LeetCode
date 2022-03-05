// Given an array of integers nums sorted in non-decreasing order,
// find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// const nums = [5, 7, 7, 8, 8, 10];
// const target = 8;

// const nums = [];
// const target = 0;

const binarySearch = function (nums, target) {
  let start = 0,
    end = nums.length - 1;

  // Iterate while start not meets end
  while (start <= end) {
    // Find the mid index
    let mid = Math.floor((start + end) / 2);

    // If element is present at mid, return True
    if (nums[mid] === target) return mid;
    // Else look in left or right half accordingly
    else if (nums[mid] < target) start = mid + 1;
    else end = mid - 1;
  }

  return -1;
};

var searchRange = function (nums, target) {
  const foundElementIndex = binarySearch(nums, target);

  if (foundElementIndex !== -1) {
    let i = foundElementIndex;
    let j = foundElementIndex;
    while (i + 1 < nums.length && nums[i + 1] === target) i++;
    while (j - 1 >= 0 && nums[j - 1] === target) j--;

    return [j, i];
  }

  return [-1, -1];
};

console.log(searchRange(nums, target));

// Runtime: 98 ms, faster than 39.78% of JavaScript online submissions for
// Find First and Last Position of Element in Sorted Array.
// Memory Usage: 41.9 MB, less than 58.18% of JavaScript online submissions for
// Find First and Last Position of Element in Sorted Array.
