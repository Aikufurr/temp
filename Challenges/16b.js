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

let regex = /^(H|L|C|h|l|c)$/;

function getValue(q, regex) {
  let x = input(`${q}: `);
  if (!regex.test(x)) {
    while (!regex.test(x)) {
      x = input(`Input does not equal format ${regex.toString()}. Try again\n${q}: `);
    }
  }
  return (x).toLowerCase();
}

let attempts = 0;
let found = false;
let guess = random(1, 100);
let low = 1;
let high = 100;
while (!found) {
  attempts++;
  console.log("CPU Guess:", guess);
  let number = getValue("[H/L/C]", regex);
  if (number == "h") {
    low = guess
  } else if (number == "l") {
    high = guess
  } else if (number == "c") {
    console.log("CPU Guessed correctly after", attempts, "attempt(s)")
    return;
  }
  guess = random(low, high);
}