//assignment operator//
var x = 10;
x += 5;
console.log(x);

var y = 10;
y /= 5;
console.log(y);

//ternary operator

function checkEqual(a, b) {
  return a === b ? true : false;
}
console.log(checkEqual(1, 2));

//multiple ternary operator

function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
console.log(checkSign(0));
