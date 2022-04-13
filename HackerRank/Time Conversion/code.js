let s = "12:59:58AM";

let hours = parseInt(s[0] + s[1]);
let minutes = s[3] + s[4];
let seconds = s[6] + s[7];

// let isAM = s.endsWith("AM");
let isAM = s.slice(-2) == "AM" ? true : false;

if (!isAM && hours !== 12) {
  hours += 12;
}

if (hours === 12 && isAM) {
  hours = 0;
}

console.log(`${hours.toString().padStart(2, "0")}:${minutes}:${seconds}`);
