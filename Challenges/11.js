const readlineSync = require('readline-sync'); function input(string) {
  return readlineSync.question(string);
} function keyInSelect(options, string) {
  return readlineSync.keyInSelect(options, string);
} function keyIn(string, options) {
  return readlineSync.keyIn(string, options);
}

let gates = [
  {
    gate: "OR",
    execute(a, b) {
      return (a || b) ? 1 : 0;
    }
  }, 
  {
    gate: "XOR",
    execute(a, b) {
      return ((a || b) && (a != b)) ? 1 : 0;
    }
  }, 
  {
    gate: "AND",
    execute(a, b) {
      return ((a && b)) ? 1 : 0;
    }
  }, 
  {
    gate: "NAND",
    execute(a, b) {
      return (!(a && b)) ? 1 : 0;
    }
  }, 
  {
    gate: "NOR",
    execute(a, b) {
      return (!(a || b)) ? 1 : 0;
    }
  }, 
];

let options = gates.map(o => o.gate);

let index = keyInSelect(options, 'Pick a gate');
if (index == -1) { return; }
console.log("\n");

let gate = gates[index];
let a = parseInt(keyIn('a: [1 or 0] ', {limit: '$<0-1>'}));
let b = parseInt(keyIn('b: [1 or 0] ', {limit: '$<0-1>'}));

console.log(gate.execute(a, b));