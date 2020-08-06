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

//checking properties of object//
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh",
};
function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else {
    return "Not Found";
  }
}

console.log(checkObj("gift"));

//JSON.parse(Json.stringify())-- fancy way in js to copy the object//
