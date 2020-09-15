const readlineSync = require('readline-sync'); function input(string) {
  return readlineSync.question(string);
}

input("Press {enter} when you thing 10 seconds have passed. Press {enter} to start.")
let start = new Date();
input("");
let end = new Date();

console.log("You were", (10-((Math.abs(end-start)/1000))).toFixed(2), "seconds away from 10")