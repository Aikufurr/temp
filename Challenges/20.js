const readlineSync = require('readline-sync'); function input(string) {
  return readlineSync.question(string);
} function keyInSelect(options, string) {
  return readlineSync.keyInSelect(options, string);
} function keyIn(string, options) {
  return readlineSync.keyIn(string, options);
}
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fibonacci(number) {
  let temp;
  let previousNumber = 1;
  let indexOfFib = 0;

  number -= 1;

  while (number >= 0) {
    temp = previousNumber;
    previousNumber = previousNumber + indexOfFib;
    indexOfFib = temp;
    number -= 1;
  }

  return indexOfFib;
}

console.log(fibonacci(parseInt(input("What index of the Fibonacci Sequence? "))));

