function flippingBits(n) {
  let binary = n.toString(2).padStart(32, "0");

  let arr = [];
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] == "0") {
      arr.push("1");
    } else {
      arr.push("0");
    }
  }

  return parseInt(arr.join(""), 2);
}

let n = 0;

console.log(flippingBits(n));
