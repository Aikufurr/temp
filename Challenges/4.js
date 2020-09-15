const readlineSync = require('readline-sync'); function input(string) {
  return readlineSync.question(string);
}

function getValue(q) {
  let x = input(`${q}: `);
  if (!/^([0-9]*)$/.test(x)) {
    while (!/^([0-9]*)$/.test(x)) {
      x = input(`Input does not equal format /^([0-9]*)$/. Try again\n${q}: `);
    }
  }
  return parseInt(x);
}

let car = { s: 0, t: 0, d1: 0, t1: 0};

car.s = getValue("Speed (m/s)");
car.t = getValue("Time (s)");
car.d1 = getValue("Solve for Speed: Distance (m)");
car.t1 = getValue("Solve for Speed: Time (s)");

console.log("Distance:", car.s*car.t, "m  Speed:", car.d1/car.t1, "m/s");