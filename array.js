//adding elements in the array
var ourArr = [9, 3, 7, 11, 20];
var count = 0;

for (var i = 0; i < ourArr.length; i++) {
  count += ourArr[i];
}
console.log(count);

// nested for loop for nested array
var product = multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);
console.log(product);
function multiplyAll(arr) {
  var product = 1;

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) product *= arr[i][j];
  }
  return product;
}

//mutate a array declared as const
const s = [5, 7, 2];
function editArr() {
  "use strict";
  //s = [9,11,6]
  s[0] = 9;
  s[1] = 11;
  s[2] = 6;
}
editArr();
console.log(s);
