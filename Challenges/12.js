const readlineSync = require('readline-sync'); function input(string) {
  return readlineSync.question(string);
}

function factors(number) {
  return Array.from(Array(number + 1), (_, i) => i)
    .filter(i => number % i === 0)
}

function isPrime(number) {
  for (let i = 2; i < number; i++)
    if (number % i === 0) return false;
  return number > 1;
}

let regex = /^([0-9]*)$/;

function getValue(q, regex) {
  let x = input(`${q}: `);
  if (!regex.test(x)) {
    while (!regex.test(x)) {
      x = input(`Input does not equal format ${regex.toString()}. Try again\n${q}: `);
    }
  }
  return parseInt(x);
}

let number = getValue("Enter a number", regex);

console.log(factors(number).join(", "), isPrime(number) ? "\nIt is a prime number" : "\nIt is not a prime number");