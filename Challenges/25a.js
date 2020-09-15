const readlineSync = require('readline-sync'); function input(string) {
  return readlineSync.question(string);
}

Array.prototype.contains2D = function (item) {
  for (var i = 0; i < this.length; i++) {
    if (this[i][0] == item[0] && this[i][1] == item[1]) {
      return true;
    }
  }
  return false;
}

let suites = ["Hearts", "Tiles", "Clovers", "Pikes"];
let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let history = [];

while (true) {
  let suite = suites[Math.floor(Math.random() * suites.length)];
  let card = cards[Math.floor(Math.random() * cards.length)];

  if (!history.contains2D([suite, card])) {
    history.push([suite, card]);
    console.log(card, suite);
    input("Press {enter} for another");
  } else if (history.length == 52) {
    console.log("Deck empty");
    return;
  }
}