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


let cards = [
  ['A', 11], ['2', 2],
  ['3', 3], ['4', 4],
  ['5', 5], ['6', 6],
  ['7', 7], ['8', 8],
  ['9', 9], ['10', 10],
  ['J', 10], ['Q', 10],
  ['K', 10]
];
let hand = [];
let score = 0;

while (true) {
  let choice = keyInSelect(["Draw", "Stand"], "Pick an option");
  if (choice == -1) {
    return;
  } else if (choice == 0) {
    let card = cards[Math.floor(Math.random() * cards.length)];
    hand.push(card);
    if (card[0] == "A" && (score + card[1]) > 21) {
      card[1] = 1;
    }
    score += card[1];
    if (score > 21) {
      console.log("You've gone bust.");
      return;
    }
    console.log("Drawn Card:", card[0], "Your score:", score);
  } else if (choice == 1) {
    let cpu1 = cards[Math.floor(Math.random() * cards.length)];
    let cpu2 = cards[Math.floor(Math.random() * cards.length)];
    let cpuScore = cpu1[1] + cpu2[1];
    console.log(`CPU Draws: ${cpu1[0]} (${cpu1[1]}) and ${cpu2[0]} (${cpu2[1]})\nCPU Score: ${cpuScore}`);
    console.log(score > cpuScore ? "You Win!" : "You Lost");
    return;
  }
}