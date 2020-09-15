const readlineSync = require('readline-sync');



var options = ["OR", "AND", "XOR"];

var select = readlineSync.keyInSelect(options, 'Pick a gate');

if (select == -1) { return; }

// OR is index 0
if (select == 0) { console.log("YOu selected OR") }