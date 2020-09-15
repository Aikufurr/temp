/*
  Challenge 26 CodeBreaker 

  The computer generates a 4 digit code
  The user types in a 4 digit code. Their guess.
  The computer tells them how many digits they guessed correctly 

  Extension : the computer tells them how many digits are guessed correctly in the
  correct place and how many digits have been guessed correctly but in the wrong place. 

  The user gets 12 guesses to either win – guess the right code. 
  Or lose – run out of guesses.
*/

const readlineSync = require('readline-sync');

function input(string) {
  return readlineSync.question(string);
}
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let pin = [];
let pinRegex = /^([1-4][1-4][1-4][1-4])$/;

for (let i = 0; i < 4; i++) {
  pin.push([random(1, 4), 0]);
}

pin = [[1,0], [2,0], [4,0], [3,0]]

function display(pin) {
  let pinDisplay = "";

  pin.forEach(e => {
    pinDisplay += "|"
    pinDisplay += e[1] ? e[0] : "x"
  });

  pinDisplay = pinDisplay.substr(1);

  return pinDisplay;
}

for (let attempt = 0; attempt < 12; attempt++) {
  console.log("Attempt", `${attempt + 1}/12`);

  console.log(display(pin), "\n");

  let userPin = input("Enter your guess:\n");

  if (!pinRegex.test(userPin)) {
    while (!pinRegex.test(userPin)) {
      console.log("Input does not equal format ([1-4][1-4][1-4][1-4]). Try again");
      userPin = input("Enter your guess:\n");
    }
  }

  userPin = userPin.split("");

  userPin = userPin.map((x) => {
    return parseInt(x, 10);
  });


  for (let pinIndex = 0; pinIndex < pin.length; pinIndex++) {
    if (pin[pinIndex][0] == userPin[pinIndex]) {
      pin[pinIndex][1] = 1;
    }
  }

  if (pin.filter(e => e[1] == 1).length == 4) {
    attempt = 12;

    console.log("\nCorrect!", "\n");

    return;

  } else {
    userPin.forEach(e => {
      if (pin.map(x => x[0]).includes(e)) {
        console.log(`${e}: Is a digit`);
      } else {
        console.log(`${e}: Is not a digit`);
      }
    })
  }
  console.log("");
}

let pinDisplay = "";

pin.forEach(e => {
  pinDisplay += "|"
  pinDisplay += e[0]
});

pinDisplay = pinDisplay.substr(1);

console.log("Game Over, ran out of attempts.\nCorrect pin:", pinDisplay);