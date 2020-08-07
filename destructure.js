//destructuring assignment to assign variables from object
var voxel = { x: 3.6, y: 7.4, z: 6.54 };

var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

const { x: a, y: b, z: c } = voxel; //a=3.6, b= 7.4, c= 6.54
console.log(a, b, c);

//example 2
const AVG_temp = {
  today: 77.5,
  tomorrow: 79,
};

function temptmrw(avgTemp) {
  "use strict";
  const { tomorrow: tempOfTmrw } = avgTemp;

  return tempOfTmrw;
}
console.log(temptmrw(AVG_temp));

//destructuring assignment with nested object

const LOCAL_FORECAST = {
  today: { min: 72, max: 84.6 },
  tomorrow: { min: 73.3, max: 84.6 },
};

function maxtmrw(forecast) {
  "use strict";
  const {
    tomorrow: { max: maxOfTmrw },
  } = forecast;

  return maxOfTmrw;
}
console.log(maxtmrw(LOCAL_FORECAST));

//destructuring assignment to assign variables from array--helps to specify the exact element of the array

const [u, v, , w] = [1, 2, 3, 4, 5, 6];
console.log(u, v, w);

let q = 8,
  p = 6;
(() => {
  "use strict";
  [q, p] = [p, q];
})();
console.log(q, p);
