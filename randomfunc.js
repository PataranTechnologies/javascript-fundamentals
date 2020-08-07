//using random for decimal. no. will b/w 0&1 including 0 and excluding 1
function randomFunction() {
  return Math.random();
}
console.log(randomFunction());

//generate random whole number
// random number b/w 0-19: Math.floor(Math.random())
//Math.floor rounds down to the nearest whole number
function randomWN() {
  return Math.floor(Math.random() * 10);
}
console.log(randomWN());

//generating random whole num within a range
function randomRange(myMIN, myMAX) {
  return Math.floor(Math.random() * (myMAX - myMIN + 1)) + myMIN;
}

console.log(randomRange(5, 11));
