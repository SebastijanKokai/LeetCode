function getNumberOfOptions(
  priceOfJeans,
  priceOfShoes,
  priceOfSkirts,
  priceOfTops,
  budgeted
) {
  let jeansShoes = [];
  let skirtsTops = [];
  let combinations = 0;

  for (let i = 0; i < priceOfJeans.length; i++) {
    for (let j = 0; j < priceOfShoes.length; j++) {
      jeansShoes.push(priceOfJeans[i] + priceOfShoes[j]);
    }
  }

  for (let i = 0; i < priceOfSkirts.length; i++) {
    for (let j = 0; j < priceOfTops.length; j++) {
      skirtsTops.push(priceOfSkirts[i] + priceOfTops[j]);
    }
  }

  jeansShoes.sort((a, b) => a - b);
  skirtsTops.sort((a, b) => b - a);

  let limit = 0;

  for (let i = 0; i < jeansShoes.length; i++) {
    for (let j = limit; j < skirtsTops.length; j++) {
      let budget = jeansShoes[i] + skirtsTops[j];
      if (budget <= budgeted) {
        combinations += skirtsTops.length - j;
        limit = j;
        break;
      }
    }
  }

  return combinations;
}

let priceOfJeans = [2, 3];
let priceOfShoes = [4, 6];
let priceOfSkirts = [2, 3];
let priceOfTops = [1, 2, 10, 2, 4, 1];
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
