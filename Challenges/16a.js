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

let regex = /^([1-9][0-9]?$|^100)$/;

function getValue(q, regex) {
  let x = input(`${q}: `);
  if (!regex.test(x)) {
    while (!regex.test(x)) {
      x = input(`Input does not equal format ${regex.toString()}. Try again\n${q}: `);
    }
  }
  return parseInt(x);
}

let number = random(1, 100);
let attempts = 0;
let found = false;
console.log(number)
while (!found) {
  let guess = getValue("Enter a guess [1-100]", regex);
  attempts++;
  console.log(guess == number ? `${(found = true).toString().substr(5)}Correct! (After ${attempts} guesses)` : guess > number ? "Too High" : "Too Low");
}