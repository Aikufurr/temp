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

let start = random(20, 30);
console.log("Starting Number:", start)
while (start > 0) {
  let human = parseInt(keyIn('How many do you want to remove: [1-3] ', { limit: '$<1-3>' }));
  console.log(start-=human, " left");
  if(start <= 0) {console.log(`You Lose`);return;}
  let cpu = (start == 4) ? 3 : (start == 3) ? 2 : (start == 2) ? 1 : 3;
  console.log(`CPU: ${cpu}\n${start-=cpu} left`);
  if(start <= 0) {console.log(`You Win`);return;}
}