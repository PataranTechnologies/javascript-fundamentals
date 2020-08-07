/*
var vs let
~let doesn't let you declare variable twice in single block
*/
//ex on var
var dog = "bebo";
var breed = "shih tzu";
var dog = "princey";

function dogTlak() {
  "use strict";
  dog = "shoney";
}
dogTlak();

//ex on let
let dog = "bebo";
let breed = "shih tzu";
let dog = "princey";
function dogTlak() {
  "use strict";
  dog = "shoney";
}
dogTlak(); //there would be an error msg
