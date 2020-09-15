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

function firstDuplicate(a) {
  const seen = {};
  for (let v of a) {
    if (seen.hasOwnProperty(v)) {
      seen[v] += 1;
    } else {
      seen[v] = 0;
    }
  }
  let outputs = Object.keys(seen).map((key) => [key, seen[key]]).filter(e => e[1] > 0);
  let output = outputs.length > 0 ? "\nDuplicates:\n" : "\nNo Duplicates found";
  for (s of outputs) {
    output += `${s[0]}: ${s[1]}\n`
  }
  return output;
}
let names = [];
while (!names.includes("exit")) {
  names.push(input("Enter name: "));
}
names.pop();
console.log(firstDuplicate(names));