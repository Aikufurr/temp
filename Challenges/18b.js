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

function drawStars(s, d) {
  let a = "";
  for (let i = 0; i < s; i++) {
    a += " ";
  }
  for (let i = 0; i < d; i++) {
    a += "*";
  }
  return a;
}

function triange(base) {
  let odds = Array.from(Array(base + 1), (_, i) => i).filter(e => e % 2 == 1);
  for (let i = 0; i < odds.length; i++) {
    console.log(drawStars((odds.length - 1) - i, odds[i]));
  }
}

triange(parseInt(input("Enter base: ")))
