function getNumberOfOptions(
  priceOfJeans,
  priceOfShoes,
  priceOfSkirts,
  priceOfTops,
  budgeted
) {
  // Write your code here
  /*******long integer ******/
  priceOfJeans.sort((a, b) => a - b);
  priceOfShoes.sort((a, b) => a - b);
  priceOfSkirts.sort((a, b) => a - b);
  priceOfTops.sort((a, b) => a - b);

  let combinations = 0;

  for (let i = priceOfJeans.length; i >= 0; i--) {
    if (priceOfJeans[i] > budgeted) {
      priceOfJeans.pop();
    } else {
      break;
    }
  }

  for (let i = priceOfShoes.length; i >= 0; i--) {
    if (priceOfShoes[i] > budgeted) {
      priceOfShoes.pop();
    } else {
      break;
    }
  }

  for (let i = priceOfSkirts.length; i >= 0; i--) {
    if (priceOfSkirts[i] > budgeted) {
      priceOfSkirts.pop();
    } else {
      break;
    }
  }

  for (let i = priceOfTops.length; i >= 0; i--) {
    if (priceOfTops[i] > budgeted) {
      priceOfTops.pop();
    } else {
      break;
    }
  }

  for (let i = 0; i < priceOfJeans.length; i++) {
    for (let j = 0; j < priceOfShoes.length; j++) {
      for (let k = 0; k < priceOfSkirts.length; k++) {
        for (let l = 0; l < priceOfTops.length; l++) {
          let tempBudget = budgeted;
          tempBudget -=
            priceOfJeans[i] +
            priceOfShoes[j] +
            priceOfSkirts[k] +
            priceOfTops[l];
          if (tempBudget < 0) {
            break;
          }
          combinations++;
        }
      }
    }
  }

  return combinations;
}

let priceOfJeans = [2, 3];
let priceOfShoes = [4];
let priceOfSkirts = [2, 3];
let priceOfTops = [1, 2];
let budgeted = 10;

console.log(
  getNumberOfOptions(
    priceOfJeans,
    priceOfShoes,
    priceOfSkirts,
    priceOfTops,
    budgeted
  )
);
