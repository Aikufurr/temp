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

let regex = /^([0-9]?$|^10)$/;
function getValue(q, regex) {
  let x = input(`${q}: `);
  if (!regex.test(x)) {
    while (!regex.test(x)) {
      x = input(`Input does not equal format ${regex.toString()}. Try again\n${q}: `);
    }
  }
  return parseInt(x);
}

let grid = [];
for (let index = 0; index < 10; index++) {
  grid.push(Array.from(Array(10), (_, i) => 0));
}
let treasure = [Math.floor(Math.random() * grid.length), Math.floor(Math.random() * grid[0].length)];
grid[treasure[0]][treasure[1]] = 1;
let notFound = 1;
while (notFound) {
  console.log("Enter guess")
  let x = getValue("X", regex);
  let y = getValue("Y", regex);

  if (x == treasure[0] && y == treasure[1]) {
    notFound = !notFound;
    console.log("You Win!");
  } else {
    let delta = Math.hypot(treasure[0]-x, treasure[1]-y);
    console.log(`Distance: ${delta <= 3 ? "Hot" : delta <= 7.1 ? "Warm" : "Cold"} (${parseInt(delta)}m)`);
  }
}