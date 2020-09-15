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

let grid = [];
for (let index = 0; index < 10; index++) {
  grid.push(Array.from(Array(10), (_, i) => random(0, 15)));
}
console.log(grid);