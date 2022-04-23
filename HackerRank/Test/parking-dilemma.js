function carParkingRoof(cars, k) {
  // Write your code here
  cars.sort((a, b) => a - b);
  let min = Infinity;

  for (let i = 0; i <= cars.length - k; i++) {
    let carDistance = cars[i + k - 1] - cars[i];

    if (min > carDistance) {
      min = carDistance;
    }
  }

  return min + 1; // because I need to count +1 parking space
}

let cars = [2, 10, 8, 17];
let k = 3;

carParkingRoof(cars, k);
