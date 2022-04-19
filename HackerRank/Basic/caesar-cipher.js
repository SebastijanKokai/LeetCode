function caesarCipher(s, k) {
  // Write your code here

  let encryptedString = "";

  if (k > 25) {
    k %= 26;
  }

  for (let i = 0; i < s.length; i++) {
    let code = s[i].charCodeAt(0);
    if (code >= 65 && code <= 90) {
      if (code + k > 90) {
        code = code + k - 26;
      } else {
        code = code + k;
      }
    } else if (code >= 97 && code <= 122) {
      if (code + k > 122) {
        code = code + k - 26;
      } else {
        code = code + k;
      }
    }
    encryptedString += String.fromCharCode(code);
  }

  return encryptedString;
}

let s = "6DWV95HzxTCHP85dvv3NY2crzt1aO8j6g2zSDvFUiJj6XWDlZvNNr";
let k = 87;

console.log(caesarCipher(s, k));
