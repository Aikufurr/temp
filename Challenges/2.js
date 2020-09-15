const readlineSync = require('readline-sync');function input(string) {
  return readlineSync.question(string);
}

console.log("What is your name?")
let name = input("");
console.log("Hello", name)