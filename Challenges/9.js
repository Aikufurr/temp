const readlineSync = require('readline-sync'); function input(string) {
  return readlineSync.question(string);
}

let suites = ["Hearts", "Tiles", "Clovers", "Pikes"];
let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

while (true) {
  let suite = suites[Math.floor(Math.random() * suites.length)];
  let card = cards[Math.floor(Math.random() * cards.length)];

  console.log(card, suite);
  input("Press {enter} for another");
}