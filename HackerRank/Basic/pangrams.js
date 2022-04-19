function pangrams(s) {
  // Write your code here

  // First code
  // for loop -> go through every char and do toLowerCase()
  // push every char as a ascii code to an array
  // for loop -> check if in array there is every number from 97 to 122
  // 97 + 26 = 123 => i = 97; i < 123; i++;

  // Second code
  // for loop -> insert every char from string to Set
  // Check if Set.length == 26 return 'pangram' else 'not pangram'

  let set = new Set();
  s = s.toLowerCase();

  for (let i = 0; i < s.length; i++) {
    set.add(s[i]);
  }

  if (set.size == 27) {
    return "pangram";
  } else {
    return "not pangram";
  }
}

let s = "The quick brown fox jumps over the lazy dog"; // pangram
// let s = "We promptly judged antique ivory buckles for the next prize"; // pangram
// let s = "We promptly judged antique ivory buckles for the prize"; // not pangram

console.log(pangrams(s));
