function twoStrings(s1, s2) {
  // Write your code here
  let set = new Set();

  for (let i = 0; i < s1.length; i++) {
    set.add(s1[i]);
  }

  for (let i = 0; i < s2.length; i++) {
    if (set.has(s2[i])) {
      return "YES";
    }
  }

  return "NO";
}

// let s1 = "and";
// let s2 = "art";
// let s1 = "be";
// let s2 = "cat";
let s1 = "hello friends";
let s2 = "k";

console.log(twoStrings(s1, s2));
