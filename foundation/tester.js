// specials
undefined;
let person;
null;
NaN; // not a number

// objects (like a dict)
const user = {
  name: "Lexie",
  username: "lexiewh"
};

// array
const users = ["lexie", "claire", "anna"];

// declaring variables
var first = 1; // not to be used any more
const second = 2; // not to be reassigned (will throw error)
let third = 3; // can reassign

// typeof is a function to tell what type a variable is
console.log(typeof(first));

// for loop
const dogsList = document.querySelector('.dogs-list');
const dogs = [
  { name: "Wrigley", breed: "French Bulldog"},
  { name: "Charlie", breed: "Pointer"}
];

for (let i = 0; i < dogs.length; i++){
  const dog = dogs[i];
  const dogData = document.createElement('div');
  dogData.classList.add("jumbotron", "text-center");
  dogData.innerText = "${dog.name} is ${dog.breed}";
  dogsList.appendChild(dogData);
};
