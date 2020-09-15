const readlineSync = require('readline-sync'); 

function input(string) {
  return readlineSync.question(string);
}

function dateDiff(first, second) {
  return [Math.floor((second-first)/(1000*60*60*24)),Math.floor((second-first)/(1000))];
}

let regex = /^([0-9][0-9][0-9][0-9]\/([0-9])?[0-9]\/([0-9])?[0-9])$/;

function getValue(q, regex) {
  let x = input(`${q}: `);
  if (!regex.test(x)) {
    while (!regex.test(x)) {
      x = input(`Input does not equal format ${regex.toString()}. Try again\n${q}: `);
    }
  }
  return (x);
}

let diff = dateDiff(new Date(getValue("Enter birthday (YYYY/MM/DD)", regex)), new Date());

console.log("You have lived for", diff[0], "days and", diff[1], "seconds");