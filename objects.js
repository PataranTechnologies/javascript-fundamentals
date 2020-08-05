//accessing objects using dot operator//
var myDog = {
  name: "Bebo",
  legs: "4",
  Breed: "Shih Tzu",
};
var breedOfDog = myDog.Breed;
console.log(breedOfDog);

//accessing objects using brackets//
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water",
};

var entreeValue = testObj["an entree"];
var drinkVlue = testObj["the drink"];
console.log(entreeValue, drinkVlue);
