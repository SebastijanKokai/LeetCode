function lonelyInteger(a) {
  let arr = Array(Math.max(...a) + 1).fill(0);

  for (let i = 0; i < a.length; i++) {
    arr[a[i]]++;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      return i;
    }
  }

  return -1;
}

const a = [1, 2, 3, 4, 3, 2, 1];

console.log(lonelyInteger(a));
