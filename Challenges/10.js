const readlineSync = require('readline-sync'); function input(string) {
  return readlineSync.question(string);
}function keyInSelect(options, string) {
  return readlineSync.keyInSelect(options, string);
}

let options = ["Rock", "Paper", "Scissors"];
let score = 1;

while (true) {
  let human = keyInSelect(options, 'Pick an option');

  if (human == -1) { return; }

  let cpu = Math.floor(Math.random() * options.length);

  console.log(`\nCPU Picked: ${options[cpu]}\n`, human === cpu ? "Draw" : (human == 0 && cpu == 1 || (human == 1 && cpu == 0) || (human == 2 && cpu == 0)) ? "You Lose" : `You Win! Score: ${score++}`);
}