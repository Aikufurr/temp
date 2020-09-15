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


let word = [];

let chosenWord = input("Player 1, Type in a word: ");
// Clear the screen
process.stdout.write('\033c');
chosenWord = chosenWord.toUpperCase();

for (let i = 0; i < chosenWord.length; i++) {
  word.push([chosenWord[i], 0]);
}

function display(word, delim = "|", endSub = true) {
  let wordDisplay = "";

  word.forEach(e => {
    wordDisplay += endSub ? (e[1] ? e[0] : "x" ) : e[0];
    wordDisplay += delim
  });

  if (endSub) { wordDisplay = wordDisplay.substr(0, wordDisplay.length - 1); }

  return wordDisplay;
}

for (let attempt = 0; attempt < 5; attempt++) {
  console.log("Attempt", `${attempt + 1}/5`);

  console.log(display(word), "\n");

  let userWord = input("Enter your guess:\n");

  if (userWord.length > 1) {
    while (userWord.length > 1) {
      console.log("You can only input one character at a time. Try again");
      userWord = input("Enter your guess:\n");
    }
  }

  userWord = userWord.toUpperCase();

  userWord = userWord.split("");

  for (let wordIndex = 0; wordIndex < word.length; wordIndex++) {
    if (word[wordIndex][0] == userWord) {
      word[wordIndex][1] = 1;
      attempt -= 1
    }
  }

  if (word.filter(e => e[1] == 1).length == word.length) {
    attempt = 12;

    console.log("\nCorrect!", "\n");

    console.log(display(word, "", false), "\n");

    return;

  }
  console.log("");
}

console.log("Game Over, ran out of attempts.\nCorrect word:");
console.log(display(word, "", false), "\n");
