function checkMagazine(magazine, note) {
  // Write your code here
  let map = new Map();

  for (let i = 0; i < magazine.length; i++) {
    map.set(magazine[i], (map.get(magazine[i]) || 0) + 1);
  }

  for (let i = 0; i < note.length; i++) {
    let wordCount = map.get(note[i]);

    if (!wordCount) {
      console.log("No");
      return;
    }

    map.set(note[i], --wordCount);
  }
  console.log("Yes");
}

let magazine = "two times three is not four";
let note = "two times two is four";
// let magazine = "give me one grand today night";
// let note = "give one grand today";
// let magazine = "ive got a lovely bunch of coconuts coconuts";
// let note = "ive got coconuts coconuts";

checkMagazine(magazine.split(" "), note.split(" "));
