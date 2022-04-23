function minimumBribes(q) {
  // Write your code here
  // difference between current location index and value
  let bribes = 0;
  let chaotic = false;
  for (let i = 0; i < q.length; i++) {
    let bribeValue = q[i] - (i + 1);
    console.log(bribeValue, q[i]);
    // if bribeValue negative, it means someone bribed that person
    // if bribeValue positive, it means that someone bribed some other person
    if (bribeValue > 2) {
      chaotic = true;
      console.log("Too chaotic");
      break;
    }
    if (bribeValue > 0) {
      bribes += bribeValue;
    }
  }
  if (!chaotic) {
    console.log(bribes);
  }
}

// let q = [4, 1, 2, 3];
// let q = [2, 1, 5, 3, 4];
// let q = [2, 5, 1, 3, 4];
// let q = [5, 1, 2, 3, 7, 8, 6, 4]; // tc
let q = [1, 2, 5, 3, 7, 8, 6, 4]; // 7
// let q = [1, 2, 5, 3, 4, 7, 8, 6]; // 4

minimumBribes(q);
