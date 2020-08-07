//takees a string and returns an integer
function convertToInteger(str) {
  return parseInt(str);
}
console.log(convertToInteger("54"));

//use of parseint with radix(says the base of the number)

function convertToInt(str) {
  return parseInt(str, 2);
}
console.log(convertToInt("10"));
