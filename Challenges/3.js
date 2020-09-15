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

let cube = { x: 0, y: 0, z: 0 };

cube.x = getValue("Width");
cube.z = getValue("Height");
cube.y = getValue("Depth");

console.log("Area:", cube.x*cube.z, "Volume:", cube.x*cube.y*cube.z);