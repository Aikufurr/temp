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

function score(grade, max = 100) {
  grade = (grade/max)*100;
  return grade >= 80 ? "A" : grade >= 70 ? "B" : grade >= 60 ? "C" : grade >= 50 ? "D" : grade >= 40 ? "E" : "U";
}

let mod1 = parseInt(input("Enter Module 1 result: "));
let mod2 = parseInt(input("Enter Module 2 result: "));
let mod3 = (mod1+mod2)/2;

console.log(`Results\nModule 1: ${score(mod1)}\nModule 2: ${score(mod2)}\nAS Level: ${score(mod3)}`);


let module1 = parseInt(input("Enter Module 1 result: "));
let module1ms = parseInt(input("Enter Total Marks: "));

console.log(`Results\nModule 1: ${score(module1, module1ms)}`);
