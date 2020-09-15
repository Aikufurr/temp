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

function execute(inputText, offset, encrypt = 1) {
  let outputText = "";
  for (i = 0; i < inputText.length; i++) {
    if (inputText.charCodeAt(i) >= 33 && inputText.charCodeAt(i) <= 270) {
      outputText += String.fromCharCode(inputText.charCodeAt(i) + (encrypt == 1 ? offset : -offset));
    } else if (inputText.charCodeAt(i) == 32) {
      outputText += String.fromCharCode(inputText.charCodeAt(i));
    }
  }
  return outputText;
}

let inputText = input("Enter string: ");
let offset = parseInt(input("Enter offset: "));
let encrypt = parseInt(keyIn('Encrypt(1) or Decrypt(2): [1-2] ', { limit: '$<1-2>' }));
console.log(execute(inputText, offset, encrypt));