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

let numbers = Array.from(Array(10), (_, i) => random(1, 13));
let lives = 2;
for (let i = 0; (i < numbers.length - 1) && (lives != 0); i++) {
  console.log("Number:", numbers[i]);
  let human = keyIn('Higher or Lower?: [H/L] ', { limit: ['H', 'L', 'h', 'l'] }).toLowerCase();
  let correct = human == "h" ? numbers[i + 1] >= numbers[i] ? 1 : 0 : human == "l" ? numbers[i + 1] <= numbers[i] ? 1 : 0 : 0;
  if (correct) {
    console.log("Correct\n");
  } else {
    console.log("Incorrect, Number was", numbers[i + 1]);
    lives -= 1;
    if (lives == 0) { return; } else { console.log("Last life") }
  }
}
console.log("You win! Final number was", numbers[numbers.length - 1]);