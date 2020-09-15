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

let data = [
  {
    "home": { "name": "Jako Jicks", "score": 23 },
    "away": { "name": "Jako Jikies", "score": 12 }
  },
  {
    "home": { "name": "Mikey Dikes", "score": 34 },
    "away": { "name": "Micky Dikes", "score": 23 }
  },
  {
    "home": { "name": "Jeramy Moos", "score": 65 },
    "away": { "name": "Jeramy Muus", "score": 25 }
  },
  {
    "home": { "name": "Kade's Kindom", "score": 63 },
    "away": { "name": "Kade's Landom", "score": 42 }
  },
  {
    "home": { "name": "Nicole's Nation", "score": 23 },
    "away": { "name": "Nicole's Empire", "score": 46 }
  },
  {
    "home": { "name": "Harvey's Hollow", "score": 65 },
    "away": { "name": "Harvey's Swallows", "score": 18 }
  },
  {
    "home": { "name": "Rick's Rebellion", "score": 25 },
    "away": { "name": "Rick's Republican", "score": 41 }
  },
  {
    "home": { "name": "Ness' Home", "score": 47 },
    "away": { "name": "Ness' Nest", "score": 32 }
  },
  {
    "home": { "name": "Riley's Rangers", "score": 52 },
    "away": { "name": "Riley's Banterers", "score": 34 }
  },
  {
    "home": { "name": "Eric Clarls", "score": 13 },
    "away": { "name": "Eric Clats", "score": 5 }
  },
];

while (true) {
  let index = keyInSelect(["Add new result", "View results of a team"], "Select an option");
  if (index == -1) { return; }

  if (index == 0) {
    let newData = {
      "home": { "name": input("Home team's name: "), "score": parseInt(input("Home team's score: ")) },
      "away": { "name": input("Away team's name: "), "score": parseInt(input("Away team's score: ")) },
    }

    data.push(newData);
  } else if (index == 1) {
    let options = data.map(e => `${e.home.name} (${e.away.name})`);
    let index = keyInSelect(options, "Select a team");
    let e = data[index];
    console.log(`\nHome team's name: ${e.home.name} | Score: ${e.home.score}\nAway team's name: ${e.away.name} | Score ${e.away.score}`);
  }
}