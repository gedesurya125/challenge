// given two arrays of elements and monsters that listed the elements and monsters of the world of Genshin Impact
// make a function that can receive two parameters in form of a monster and an element
// the return of said function is the result if the monster fight against the element
// example:
// input -> monsterFight("Pyro Slime, Hydro")
// output -> Pyro Slime is weak against Hydro.

const elements = [
  {
    name: "Pyro",
    weakTo: "Hydro",
    strongAgainst: "Cryo",
    normalAgainst: "Electro",
  },
  {
    name: "Hydro",
    weakTo: "Electro",
    strongAgainst: "Pyro",
    normalAgainst: "Cryo",
  },
  {
    name: "Electro",
    weakTo: "Cryo",
    strongAgainst: "Hydro",
    normalAgainst: "Pyro",
  },
  {
    name: "Cryo",
    weakTo: "Pyro",
    strongAgainst: "Electro",
    normalAgainst: "Hydro",
  },
];

const monsters = [
  {
    name: "Pyro Slime",
    element: "Pyro",
  },
  {
    name: "Oceanid Mimic",
    element: "Hydro",
  },
  {
    name: "Abyss Lector",
    element: "Electro",
  },
  {
    name: "Cryo Hypostasis",
    element: "Cryo",
  },
];

const monsterFight = (monsterName, againstElement) => {
  const mon =  monsters.find(monster => monster.name === monsterName);
  if(mon === undefined) return "Please make sure to use the correct monster and element.";
  const elSpec = elements.find(el => el.name === mon.element);
  if(elSpec === undefined) return "Please make sure to use the correct monster and element.";
  const match = Object.keys(elSpec).find(key => {
    return elSpec[key] === againstElement;
  })
  // console.log(match);
  switch(match){
    case 'name': return `${monsterName} is immune against ${againstElement}.`;
    case 'weakTo': return `${monsterName} is weak against ${againstElement}.`;
    case 'strongAgainst': return `${monsterName} is strong against ${againstElement}.`;
    case 'normalAgainst': return `${monsterName} can be hurt with ${againstElement}.`;
    default: return;

  }
}

// do not edit the code below
function Test(fun, result) {
  console.log(fun === result, `expected : ${result}`);
}


// console.log(monsterFight("Cryo Hypostasis", "Electro"))
Test(monsterFight("Pyro Slime", "Pyro"), "Pyro Slime is immune against Pyro.");
Test(
  monsterFight("Cryo Hypostasis", "Electro"),
  "Cryo Hypostasis is strong against Electro."
);
Test(
  monsterFight("Dendro Slime", "Pyro"),
  "Please make sure to use the correct monster and element."
);
Test(
  monsterFight("Oceanid Mimic", "Electro"),
  "Oceanid Mimic is weak against Electro."
);
Test(
  monsterFight("Abyss Lector", "Pyro"),
  "Abyss Lector can be hurt with Pyro."
);