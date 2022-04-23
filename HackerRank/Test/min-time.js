function minTime(processorTime, taskTime) {
  // Write your code here
  taskTime.sort((a, b) => a - b);
  processorTime.sort((a, b) => b - a);

  let arr = [];

  for (let i = 3, j = 0; i < taskTime.length; i += 4, j++) {
    arr.push(processorTime[j] + taskTime[i]);
  }

  return Math.max(...arr);
}

let processorTime = [10, 20];
let taskTime = [2, 3, 1, 2, 5, 8, 4, 3];

minTime(processorTime, taskTime);
