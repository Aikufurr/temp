const readlineSync = require('readline-sync'); function input(string) {
  return readlineSync.question(string);
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

let diff = ((new Date())-(new Date(getValue("Enter birthday (YYYY/MM/DD)", regex))))/(1000*60*60*24*365) >= 18 ? true : false;

console.log(`${diff ? "You can vote" : "You can not vote"}`);