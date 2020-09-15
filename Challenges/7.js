const readlineSync = require('readline-sync'); function input(string) {
  return readlineSync.question(string);
}

let alphabet = "abcdefghijklmnopqrstuvwxyz"

input("Press {enter} to start, then type out the alphabet with no spaces.")
let start = new Date();
let alpha = input("");
let end = new Date();

if (alpha.trim().toLowerCase() == alphabet) {
  console.log("That took you", (((Math.abs(end-start)/1000))).toFixed(2), "seconds")
} else {
  console.log("You typed it wrong.")
}
