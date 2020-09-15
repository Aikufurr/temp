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


console.log(drawStars(2, 3));
console.log(drawStars(2, 3));
console.log(drawStars(3, 1));
console.log(drawStars(2, 3));
console.log(drawStars(0, 7));
console.log(drawStars(2, 1), drawStars(0, 1));
console.log(drawStars(1, 2), drawStars(0, 2));