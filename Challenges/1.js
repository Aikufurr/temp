
const readlineSync = require('readline-sync');function input(string) {
  return readlineSync.question(string);
}


// Jokes sourced from: https://github.com/elijahmanor/devpun/blob/master/jokes.json
let jokes = [
  {
    "question": "How do you comfort a JavaScript bug?",
    "answer": "You console it."
  },
  {
    "question": "Why did the child component have such great self-esteem?",
    "answer": "Because its parent kept giving it `props`!"
  },
  {
    "question": "Why do C# and Java developers keep breaking their keyboards",
    "answer": "Because they use a strongly typed language"
  },
  {
    "question": "Why did the functional component feel lost?",
    "answer": "Because it didn't know what `state` it was in!"
  },
  {
    "question": "Why was the JavaScript developer sad?",
    "answer": "Because he didn't Node how to Express himself!"
  },
  {
    "question": "Why did the developer go broke?",
    "answer": "Because he used up all his cache!"
  },
  {
    "question": "Why couldn’t the React component understand the joke?",
    "answer": "Because it didn’t get the context."
  },
  {
    "question": "Why did the software company hire drama majors from Starbucks?",
    "answer": "Because they needed JavaScript experts!"
  },
  {
    "question": "How did the doctor revive the developer?",
    "answer": "The dev wasn't responsive so the doc picked him up by his bootstraps!"
  },
  {
    "question": "dev1 > What tool do you use to switch versions of node?",
    "answer": "dev1> nvm, I figured it out."
  },
];

let joke = jokes[Math.floor(Math.random() * jokes.length)];
console.log(joke.question);
input("");
console.log(joke.answer);