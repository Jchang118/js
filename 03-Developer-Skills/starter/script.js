// Remember, we're gonna use strict mode in all scripts now!
"use strict";

function printForecast(arr) {
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      res += `... ${arr[i]}°C in ${i + 1} day`;
    } else {
      res += `... ${arr[i]}°C in ${i + 1} days`;
    }
    if (i < arr.length - 1) {
      res += " ";
    }
  }
  console.log(res);
}

let arr1 = [17, 21, 23];
let arr2 = [12, 5, -5, 0, 4];

printForecast(arr1);
printForecast(arr2);